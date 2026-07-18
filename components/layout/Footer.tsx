import Link from 'next/link';

const shopLinks = [
  { href: '/products', label: 'All T-Shirts' },
  { href: '/categories', label: 'Categories' },
  { href: '/products?category=men', label: "Men's" },
  { href: '/products?category=women', label: "Women's" },
  { href: '/products?category=unisex', label: 'Unisex' },
];

const supportLinks = [
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/shipping', label: 'Shipping Info' },
  { href: '/returns', label: 'Returns' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/about', label: 'About Us' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', marginTop: '80px' }}>
      {/* Trust strip */}
      <div style={{
        background: 'rgba(74,158,186,0.12)',
        borderBottom: '1px solid rgba(74,158,186,0.2)',
        padding: '18px 24px',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            { icon: '🚚', text: 'Free Delivery over Rs. 3,000' },
            { icon: '💵', text: 'Cash on Delivery' },
            { icon: '↩️', text: '7-Day Easy Returns' },
            { icon: '⭐', text: 'Premium Quality' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #4a9eba, #2d6e87)',
                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '900', fontSize: '16px', color: '#fff', flexShrink: 0,
              }}>R</div>
              <div>
                <span style={{ fontSize: '1.05rem', fontWeight: '800', letterSpacing: '0.15em', color: '#fff', textTransform: 'uppercase', display: 'block' }}>REFLECT</span>
                <span style={{ fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>FASHION</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.45)', maxWidth: '280px' }}>
              Premium quality T-shirts crafted for comfort and style. Serving Sri Lanka with fast island-wide delivery and cash on delivery.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '20px', padding: '10px 16px', borderRadius: '100px',
              background: 'rgba(74,158,186,0.15)', border: '1px solid rgba(74,158,186,0.3)',
            }}>
              <span style={{ fontSize: '0.9rem' }}>💵</span>
              <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#7bc2d6', letterSpacing: '0.08em' }}>CASH ON DELIVERY AVAILABLE</span>
            </div>
          </div>

          {/* Links */}
          {[{ title: 'Shop', links: shopLinks }, { title: 'Support', links: supportLinks }, { title: 'Legal', links: legalLinks }].map(section => (
            <div key={section.title}>
              <h4 style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
                {section.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {section.links.map(link => (
                  <Link key={link.href} href={link.href} className="footer-link"
                    style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '18px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Reflect Fashion. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>🇱🇰 Proudly Sri Lankan · Made with ❤️</p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #7bc2d6 !important; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}