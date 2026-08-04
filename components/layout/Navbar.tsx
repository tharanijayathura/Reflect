'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled
          ? 'rgba(238,246,249,0.96)'
          : 'linear-gradient(180deg, rgba(238,246,249,0.92) 0%, rgba(255,255,255,0.98) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(74, 158, 186, 0.18)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(74,158,186,0.08)' : 'none',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', height: '70px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '38px', height: '38px',
              background: 'linear-gradient(135deg, var(--accent-soft), rgba(74, 158, 186, 0.95))',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: '900', fontSize: '15px', color: 'var(--c-navy)', letterSpacing: '-0.5px', flexShrink: 0,
            }}>R</div>
            <div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', letterSpacing: '0.18em', color: 'var(--text-primary)', textTransform: 'uppercase', display: 'block', lineHeight: 1.1 }}>REFLECT</span>
              <span style={{ fontSize: '0.58rem', fontWeight: '600', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>FASHION</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
            {navLinks.map(link => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  padding: '8px 16px', borderRadius: '100px',
                  fontSize: '0.875rem', fontWeight: active ? '700' : '500',
                  color: active ? 'var(--c-navy)' : 'var(--text-secondary)',
                  background: active ? 'rgba(74,158,186,0.16)' : 'transparent',
                  border: active ? '1px solid rgba(74,158,186,0.24)' : '1px solid transparent',
                  transition: 'all 0.2s ease', textDecoration: 'none',
                }} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Cart */}
            <Link href="/cart" style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '8px 16px', borderRadius: '100px',
              background: cartCount > 0 ? 'rgba(74,158,186,0.18)' : 'rgba(238,246,249,0.9)',
              border: `1px solid ${cartCount > 0 ? 'rgba(74,158,186,0.3)' : 'rgba(74,158,186,0.14)'}`,
              color: cartCount > 0 ? 'var(--c-navy)' : 'var(--text-secondary)',
              fontSize: '0.875rem', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s ease',
            }} onClick={() => setMenuOpen(false)}>
              <span style={{ fontSize: '1rem', display: 'flex', alignItems: 'center' }}><ShoppingCartOutlinedIcon style={{ fontSize: '1.2rem' }} /></span>
              {cartCount > 0 && (
                <span style={{
                  minWidth: '20px', height: '20px',
                  background: 'var(--accent)', color: '#fff',
                  borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px',
                }}>{cartCount}</span>
              )}
            </Link>

            {/* Shop CTA */}
            <Link href="/products" className="shop-cta" style={{
              padding: '9px 20px', borderRadius: '100px',
              background: 'linear-gradient(135deg, rgba(74,158,186,0.9), rgba(74,158,186,0.72))',
              color: 'var(--c-navy)', fontSize: '0.875rem', fontWeight: '800',
              textDecoration: 'none', transition: 'all 0.2s ease', whiteSpace: 'nowrap',
            }} onClick={() => setMenuOpen(false)}>
              Shop Now
            </Link>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn" aria-label="Toggle menu" style={{
              display: 'none', flexDirection: 'column', gap: '5px', padding: '8px',
              background: 'rgba(74,158,186,0.12)', border: '1px solid rgba(74,158,186,0.18)',
              borderRadius: '10px', cursor: 'pointer',
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '20px', height: '2px',
                  background: 'var(--c-navy)', borderRadius: '2px', transition: 'all 0.3s ease',
                  transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(74,158,186,0.18)', backdropFilter: 'blur(4px)',
        }} />
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '300px',
        zIndex: 50,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(238,246,249,0.98) 100%)',
        borderLeft: '1px solid rgba(74, 158, 186, 0.18)',
        padding: '80px 20px 32px',
        display: 'flex', flexDirection: 'column', gap: '6px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        overflowY: 'auto',
      }} className="mobile-drawer">
        <p style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>
          Navigation
        </p>
        {navLinks.map(link => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} style={{
              display: 'block', padding: '13px 16px', borderRadius: '12px',
              fontSize: '0.95rem', fontWeight: '600',
              color: active ? 'var(--c-navy)' : 'var(--text-primary)',
              background: active ? 'rgba(74,158,186,0.16)' : 'transparent',
              border: `1px solid ${active ? 'rgba(74,158,186,0.24)' : 'transparent'}`,
              textDecoration: 'none', transition: 'all 0.2s ease',
            }}>
              {link.label}
            </Link>
          );
        })}
        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <Link href="/products" style={{
            display: 'block', padding: '13px', borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(74,158,186,0.9), rgba(74,158,186,0.7))', color: 'var(--c-navy)',
            fontSize: '0.9rem', fontWeight: '800', textAlign: 'center', textDecoration: 'none',
          }} onClick={() => setMenuOpen(false)}>
            Shop All T-Shirts <ArrowForwardIcon style={{ fontSize: '0.9rem', verticalAlign: 'middle' }} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { gap: 0 !important; }
          .desktop-nav a { padding: 8px 12px !important; font-size: 0.83rem !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .shop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
          header > div { padding: 0 16px !important; height: 64px !important; }
          .mobile-drawer { width: min(92vw, 320px) !important; }
        }
        @media (max-width: 480px) {
          header > div { padding: 0 14px !important; }
          .shop-cta { display: none !important; }
        }
        .desktop-nav a:hover { color: var(--c-navy) !important; background: rgba(74,158,186,0.18) !important; }
      `}</style>
    </>
  );
}