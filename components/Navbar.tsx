'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useCart } from '@/lib/cart-context';

const primaryLinks = [
  { href: '/products?category=men', label: 'Men' },
  { href: '/products?category=women', label: 'Women' },
  { href: '/categories', label: 'Collections' },
  { href: '/products', label: 'New in' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (menuOpen || currentScrollY <= 12) {
        setNavHidden(false);
      } else if (scrollDelta > 8) {
        setNavHidden(true);
      } else if (scrollDelta < -8) {
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`fashion-header${navHidden && !menuOpen ? ' fashion-header--hidden' : ''}`}>
        <div className="main-navigation">
          <nav className="desktop-links" aria-label="Shop categories">
            {primaryLinks.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href ? 'is-active' : ''}>{link.label}</Link>)}
          </nav>
          <Link href="/" className="fashion-logo" aria-label="Reflect Fashion home" onClick={closeMenu}>
            <span>REFLECT</span><small>FASHION</small>
          </Link>
          <div className="navigation-tools">
            <Link href="/account" aria-label="Account"><PersonOutlineRoundedIcon /></Link>
            <Link href="/wishlist" aria-label="Wishlist"><FavoriteBorderRoundedIcon /></Link>
            <Link href="/cart" className="bag-link" aria-label={`Shopping bag, ${cartCount} items`}><ShoppingBagOutlinedIcon /><span>Bag</span>{cartCount > 0 && <b>{cartCount}</b>}</Link>
            <button type="button" className="mobile-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fashion-menu-overlay ${menuOpen ? 'fashion-menu-overlay--open' : ''}`} onClick={closeMenu} />
      <aside className={`fashion-mobile-menu ${menuOpen ? 'fashion-mobile-menu--open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-menu-heading">
          <div><span>REFLECT</span><small>FASHION</small></div>
          <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu"><CloseRoundedIcon /></button>
        </div>
        <p>Shop the edit</p>
        <div className="mobile-menu-links">
          {primaryLinks.map((link, index) => <Link key={link.href} href={link.href} onClick={closeMenu}><small>0{index + 1}</small><span>{link.label}</span><ArrowForwardRoundedIcon /></Link>)}
        </div>
        <div className="mobile-menu-footer">
          <Link href="/wishlist" onClick={closeMenu}>My wishlist <ArrowForwardRoundedIcon /></Link>
          <Link href="/account" onClick={closeMenu}>My account <ArrowForwardRoundedIcon /></Link>
        </div>
      </aside>

      <style>{`
        .fashion-header { position:sticky; top:0; z-index:50; width:100%; padding:15px 16px; background:var(--hero-yellow); color:var(--c-navy); transition:transform .3s cubic-bezier(.22,1,.36,1); }
        .fashion-header--hidden { transform:translateY(-100%); }
        .main-navigation { position:relative; width:min(100%,1260px); min-height:70px; margin:0 auto; padding:0 clamp(18px,3vw,42px); display:grid; grid-template-columns:1fr auto 1fr; align-items:center; border:1px solid rgba(21,20,37,.13); border-radius:16px; background:rgba(255,251,235,.94); box-shadow:0 10px 24px rgba(87,59,0,.08); }
        .desktop-links { display:flex; gap:clamp(16px,2vw,31px); align-items:center; }
        .desktop-links a { position:relative; padding:7px 0; color:var(--c-navy); font-size:.72rem; font-weight:800; letter-spacing:.08em; text-decoration:none; text-transform:uppercase; }
        .desktop-links a::after { content:''; position:absolute; bottom:1px; left:0; width:100%; height:2px; transform:scaleX(0); transform-origin:left; background:var(--accent); transition:transform .2s ease; }
        .desktop-links a:hover::after,.desktop-links .is-active::after { transform:scaleX(1); }
        .fashion-logo { display:flex; flex-direction:column; align-items:center; color:var(--c-navy); text-decoration:none; line-height:1; }
        .fashion-logo span { font-size:1.55rem; font-weight:950; letter-spacing:.13em; }
        .fashion-logo small { margin-top:5px; color:var(--accent); font-size:.49rem; font-weight:900; letter-spacing:.38em; }
        .navigation-tools { justify-self:end; display:flex; align-items:center; gap:13px; }
        .navigation-tools > a { display:inline-flex; align-items:center; justify-content:center; color:var(--c-navy); text-decoration:none; transition:color .2s ease; }
        .navigation-tools > a:hover { color:var(--accent); }
        .navigation-tools svg { font-size:1.17rem; }
        .bag-link { position:relative; gap:5px; font-size:.7rem; font-weight:850; letter-spacing:.07em; text-transform:uppercase; }
        .bag-link b { min-width:16px; height:16px; display:grid; place-items:center; border-radius:50%; background:var(--accent); color:#fff; font-size:.56rem; }
        .mobile-menu-button { display:none; width:40px; height:40px; align-items:center; justify-content:center; border:1px solid rgba(26,26,46,.12); border-radius:11px; background:#fff; color:var(--c-navy); cursor:pointer; transition:background .2s ease, transform .2s ease; }
        .mobile-menu-button:hover { background:var(--hero-yellow); transform:translateY(-1px); }
        .fashion-menu-overlay { position:fixed; inset:0; z-index:55; background:rgba(15,14,35,.35); opacity:0; pointer-events:none; transition:opacity .25s ease; }
        .fashion-menu-overlay--open { opacity:1; pointer-events:auto; }
        .fashion-mobile-menu { position:fixed; top:0; right:0; bottom:0; z-index:60; width:min(390px,92vw); padding:28px 30px 26px; display:flex; flex-direction:column; background:var(--warm-cream); box-shadow:-18px 0 45px rgba(23,21,38,.12); transform:translateX(100%); transition:transform .35s cubic-bezier(.22,1,.36,1); }
        .fashion-mobile-menu--open { transform:translateX(0); }
        .mobile-menu-heading { display:flex; align-items:flex-start; justify-content:space-between; padding-bottom:31px; border-bottom:1px solid rgba(26,26,46,.12); }
        .mobile-menu-heading div { display:flex; flex-direction:column; line-height:1; }
        .mobile-menu-heading span { font-size:1.45rem; font-weight:950; letter-spacing:.12em; }
        .mobile-menu-heading small { margin-top:6px; color:var(--accent); font-size:.44rem; font-weight:900; letter-spacing:.38em; }
        .mobile-menu-close { width:40px; height:40px; display:grid; place-items:center; border:1px solid rgba(21,20,37,.14); border-radius:50%; background:var(--hero-yellow); color:var(--c-navy); cursor:pointer; transition:transform .2s ease; }
        .mobile-menu-close:hover { transform:rotate(8deg); }
        .mobile-menu-close svg { font-size:1.25rem; }
        .fashion-mobile-menu > p { margin:30px 0 13px; color:var(--accent); font-size:.67rem; font-weight:900; letter-spacing:.16em; text-transform:uppercase; }
        .mobile-menu-links { border-top:1px solid rgba(26,26,46,.1); }
        .fashion-mobile-menu a { display:grid; grid-template-columns:28px 1fr auto; align-items:center; padding:17px 0; border-bottom:1px solid rgba(26,26,46,.1); color:var(--c-navy); font-size:1.08rem; font-weight:850; text-decoration:none; transition:color .2s ease, padding-left .2s ease; }
        .fashion-mobile-menu a:hover { padding-left:6px; color:var(--accent); }
        .fashion-mobile-menu a small { color:var(--text-muted); font-size:.61rem; letter-spacing:.08em; }
        .fashion-mobile-menu a svg { font-size:1rem; transition:transform .2s ease; }
        .fashion-mobile-menu a:hover svg { transform:translateX(3px); }
        .mobile-menu-footer { margin-top:auto; }
        .mobile-menu-footer a { padding:12px 0; border-bottom:0; font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; }
        @media (max-width:850px) { .fashion-header { padding:10px 14px; } .desktop-links { display:none; } .main-navigation { grid-template-columns:1fr auto 1fr; min-height:65px; padding-right:104px; } .bag-link { position:absolute; top:50%; right:60px; width:40px; height:40px; padding:0; border:1px solid rgba(21,20,37,.12); border-radius:11px; background:rgba(255,255,255,.68); transform:translateY(-50%); } .bag-link span { display:none; } .bag-link b { position:absolute; top:-4px; right:-4px; min-width:16px; height:16px; } .mobile-menu-button { position:absolute; top:50%; right:14px; display:inline-flex; transform:translateY(-50%); } .mobile-menu-button:hover { transform:translateY(calc(-50% - 1px)); } }
        @media (max-width:480px) { .fashion-header { padding:8px 10px; } .main-navigation { padding:0 104px 0 14px; min-height:60px; border-radius:13px; } .fashion-logo span { font-size:1.23rem; } .fashion-logo small { font-size:.43rem; } .navigation-tools { height:38px; gap:7px; } .navigation-tools > a:not(.bag-link) { display:none; } .bag-link { position:absolute; top:50%; right:56px; width:38px; height:38px; padding:0; border:1px solid rgba(21,20,37,.12); border-radius:10px; background:rgba(255,255,255,.68); transform:translateY(-50%); } .bag-link span { display:none; } .bag-link b { position:absolute; top:-4px; right:-4px; min-width:15px; height:15px; } .mobile-menu-button { right:10px; width:38px; height:38px; background:var(--hero-yellow); border-color:rgba(21,20,37,.12); } .fashion-mobile-menu { width:100%; padding:22px 22px 22px; } }
      `}</style>
    </>
  );
}
