'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useCart } from '@/lib/cart-context';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  notes: string;
};

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', district: '', postalCode: '', notes: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [orderId] = useState(() => `RF-${Date.now().toString().slice(-6)}`);
  const formRef = useRef<HTMLFormElement>(null);

  const shipping = cartTotal >= 3000 ? 0 : 350;
  const total = cartTotal + shipping;

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email required';
    if (!form.phone.trim() || form.phone.length < 9) errs.phone = 'Valid phone required';
    if (!form.address.trim()) errs.address = 'Required';
    if (!form.city.trim()) errs.city = 'Required';
    if (!form.district.trim()) errs.district = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    if (!validate()) return;
    setPlacing(true);
    setTimeout(() => {
      setPlacing(false);
      setPlaced(true);
      clearCart();
    }, 1500);
  };

  const inputStyle = (field: keyof FormState): React.CSSProperties => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: '12px',
    border: errors[field] ? '1.5px solid var(--error)' : '1.5px solid var(--border)',
    background: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  });

  // Order placed success screen
  if (placed) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '520px',
          background: 'var(--bg-card)',
          border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: '28px',
          padding: '56px 40px',
          animation: 'scaleIn 0.4s ease forwards',
          boxShadow: 'var(--shadow-card)',
        }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'rgba(34,197,94,0.12)', border: '2px solid rgba(34,197,94,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2.5rem', margin: '0 auto 24px',
          }}>✓</div>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#22c55e', marginBottom: '12px' }}>
            Order Placed!
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            Thank you, <strong style={{ color: 'var(--text-primary)' }}>{form.firstName}</strong>! Your order has been confirmed.
          </p>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '100px',
            background: 'var(--accent-soft)',
            border: '1px solid rgba(74, 158, 186, 0.25)',
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}>
            Order ID: {orderId}
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            📦 Delivering to: {form.address}, {form.city}, {form.district}
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '32px' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '700' }}>💵 Cash on Delivery</span>
            <span style={{ color: 'var(--text-secondary)' }}> — Pay Rs. {total.toLocaleString()} when your order arrives.</span>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
            Estimated delivery: <strong style={{ color: 'var(--text-primary)' }}>2–5 business days</strong>
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              borderRadius: '100px',
              background: 'var(--navy)',
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(15,37,51,0.1)',
            }}
          >
            Continue Shopping →
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            <Link href="/cart" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cart</Link>
            <span>›</span>
            <span style={{ color: 'var(--text-primary)' }}>Checkout</span>
          </nav>
          <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
            Secure Checkout
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            Complete Your Order
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'start' }} className="checkout-layout">

          {/* Form */}
          <div>
            <form ref={formRef} onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}>
              {/* Delivery Details */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '32px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: 'var(--accent-soft)', border: '1px solid rgba(74, 158, 186, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: '900', color: 'var(--accent)',
                  }}>1</span>
                  Delivery Details
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                  {/* First name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      First Name *
                    </label>
                    <input
                      value={form.firstName}
                      onChange={e => handleChange('firstName', e.target.value)}
                      placeholder="Kasun"
                      style={inputStyle('firstName')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.firstName ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.firstName && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.firstName}</p>}
                  </div>

                  {/* Last name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      Last Name *
                    </label>
                    <input
                      value={form.lastName}
                      onChange={e => handleChange('lastName', e.target.value)}
                      placeholder="Perera"
                      style={inputStyle('lastName')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.lastName ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.lastName && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.lastName}</p>}
                  </div>

                  {/* Email */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      placeholder="kasun@example.com"
                      style={inputStyle('email')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.email ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.email && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      placeholder="077 123 4567"
                      style={inputStyle('phone')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.phone ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.phone && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.phone}</p>}
                  </div>

                  {/* Address */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      Street Address *
                    </label>
                    <input
                      value={form.address}
                      onChange={e => handleChange('address', e.target.value)}
                      placeholder="No. 45, Temple Road, Colombo 7"
                      style={inputStyle('address')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.address ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.address && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.address}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      City *
                    </label>
                    <input
                      value={form.city}
                      onChange={e => handleChange('city', e.target.value)}
                      placeholder="Colombo"
                      style={inputStyle('city')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.city ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.city && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.city}</p>}
                  </div>

                  {/* District */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      District *
                    </label>
                    <select
                      value={form.district}
                      onChange={e => handleChange('district', e.target.value)}
                      style={{ ...inputStyle('district'), cursor: 'pointer' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.district ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="">Select District</option>
                      {['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Ratnapura', 'Kegalle'].map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    {errors.district && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--error)' }}>{errors.district}</p>}
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      Postal Code
                    </label>
                    <input
                      value={form.postalCode}
                      onChange={e => handleChange('postalCode', e.target.value)}
                      placeholder="00700"
                      style={inputStyle('postalCode')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  {/* Notes */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      Order Notes (Optional)
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={e => handleChange('notes', e.target.value)}
                      placeholder="Any special delivery instructions..."
                      rows={3}
                      style={{
                        ...inputStyle('notes'),
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-soft)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: 'var(--accent-soft)', border: '1px solid rgba(74, 158, 186, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: '900', color: 'var(--accent)',
                  }}>2</span>
                  Payment Method
                </h2>

                {/* COD Only */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'var(--accent-soft)',
                  border: '2px solid rgba(74, 158, 186, 0.25)',
                }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'var(--accent)',
                    border: '2px solid var(--accent)',
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '4px' }}>
                      💵 Cash on Delivery
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Pay when your order arrives. No card or online payment needed. Our delivery partner will collect payment at your door.
                    </p>
                  </div>
                </div>
              </div>
            </form>
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
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px' }}>
              Order Summary
            </h2>

            {/* Items */}
            {items.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                {items.map(item => (
                  <div key={`${item.productId}-${item.size}-${item.color}`} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '64px', borderRadius: '10px', overflow: 'hidden', background: 'var(--bg-soft)', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', lineHeight: 1.3 }}>{item.name}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.size} · {item.color} · ×{item.quantity}</p>
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent)', flexShrink: 0 }}>
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0', marginBottom: '20px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>No items in cart.</p>
                <Link href="/products" style={{ color: 'var(--accent)', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Browse Products →
                </Link>
              </div>
            )}

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Subtotal</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)' }}>Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Shipping</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: shipping === 0 ? '#22c55e' : 'var(--text-primary)' }}>
                  {shipping === 0 ? 'Free 🎉' : `Rs. ${shipping}`}
                </span>
              </div>
              <div style={{ display: 'flex', justifyBetween: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border)', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)' }}>Total (COD)</span>
                <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--accent)' }}>Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placing || items.length === 0}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                border: 'none',
                background: items.length === 0 ? 'var(--border-dark)' : 'var(--navy)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '800',
                cursor: items.length === 0 ? 'not-allowed' : 'pointer',
                opacity: placing ? 0.7 : 1,
                boxShadow: items.length > 0 ? '0 4px 16px rgba(15,37,51,0.1)' : 'none',
                transition: 'all 0.25s ease',
              }}
              className="checkout-place-btn"
            >
              {placing ? 'Placing Order...' : items.length === 0 ? 'Add Items to Cart' : '📦 Place Order (Cash on Delivery)'}
            </button>

            <p style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.5 }}>
              By placing your order, you agree to our{' '}
              <Link href="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-place-btn:hover { background: var(--accent) !important; }
        @media (max-width: 900px) {
          .checkout-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .form-grid > div[style*="1 / -1"] { grid-column: 1 !important; }
        }
      `}</style>
    </main>
  );
}