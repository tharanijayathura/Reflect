import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const reflectValues = ['Refined design', 'Everyday comfort', 'Fine fabrics', 'Local craftsmanship', 'Essential fits', 'Classic curation', 'Trending styles'];

export default function Hero() {
  return (
    <section className="yellow-hero">
      <div className="hero-wordmark" aria-hidden="true">REFLECT</div>
      <div className="hero-model">
        <Image src="/images/herogirl.png" alt="Woman wearing the Reflect Fashion collection" fill priority sizes="(max-width: 768px) 90vw, 54vw" />
      </div>

      <div className="hero-side-copy">
        <span className="hero-kicker">Reflect fashion</span>
        <p>Style made<br />to move with<br /><strong>you.</strong></p>
      </div>

      <div className="hero-main-action">
        <Link href="/products">Shop new drop <ArrowForwardRoundedIcon /></Link>
        <Link href="/categories">Explore styles</Link>
      </div>

      <div className="hero-collection-note">
        <span>Colour edit</span>
        <strong>New<br />collection</strong>
        <small>2026 — 01</small>
      </div>

      <div className="hero-reflect-code" aria-label="The Reflect Fashion code">
        <span>The Reflect code</span>
        <p>{reflectValues.map((value) => <em key={value}><b>{value.charAt(0)}</b>{value.slice(1)}</em>)}</p>
      </div>

      <style>{`
        .yellow-hero { position:relative; min-height:700px; height:calc(100vh - 100px); max-height:910px; overflow:hidden; isolation:isolate; background:var(--hero-yellow); color:#151425; }
        .hero-wordmark { position:absolute; z-index:-1; top:50%; left:50%; width:100%; transform:translate(-50%,-51%); color:#171526; font-family:"Arial Black", "Helvetica Neue", Arial, sans-serif; font-size:clamp(7.2rem,17.8vw,19rem); font-weight:900; letter-spacing:-.095em; line-height:.75; text-align:center; white-space:nowrap; user-select:none; }
        .hero-model { position:absolute; z-index:1; top:1%; left:50%; width:min(51vw,690px); height:100%; transform:translateX(-43%); pointer-events:none; }
        .hero-model img { object-fit:contain; object-position:center bottom; filter:drop-shadow(17px 21px 18px rgba(62,43,0,.18)); }
        .hero-side-copy { position:absolute; z-index:2; top:18%; left:clamp(24px,8vw,110px); }
        .hero-kicker { display:block; margin-bottom:13px; font-family:"Helvetica Neue", Arial, sans-serif; font-size:.64rem; font-weight:800; letter-spacing:.21em; text-transform:uppercase; }
        .hero-side-copy p { margin:0; font-family:"Arial Black", "Helvetica Neue", Arial, sans-serif; font-size:clamp(.92rem,1.25vw,1.16rem); font-weight:800; letter-spacing:.14em; line-height:1.42; text-transform:uppercase; }
        .hero-side-copy strong { color:var(--accent); }
        .hero-main-action { position:absolute; z-index:3; bottom:12%; left:clamp(24px,8vw,110px); display:flex; align-items:center; gap:20px; }
        .hero-main-action a { color:#151425; font-family:"Helvetica Neue", Arial, sans-serif; font-size:.68rem; font-weight:800; letter-spacing:.1em; text-decoration:none; text-transform:uppercase; }
        .hero-main-action a:first-child { display:flex; align-items:center; gap:11px; padding:15px 20px; background:#171526; color:#fff; transition:background .2s ease,transform .2s ease; }
        .hero-main-action a:first-child:hover { transform:translateY(-2px); background:var(--accent); }
        .hero-main-action a:first-child svg { font-size:.95rem; }
        .hero-main-action a:last-child { position:relative; padding-bottom:5px; }
        .hero-main-action a:last-child::after { content:''; position:absolute; right:0; bottom:0; left:0; height:1px; background:#171526; }
        .hero-collection-note { position:absolute; z-index:2; right:clamp(24px,7vw,100px); bottom:12%; display:flex; flex-direction:column; align-items:flex-start; }
        .hero-collection-note span { margin-bottom:8px; font-family:"Helvetica Neue", Arial, sans-serif; font-size:.61rem; font-weight:800; letter-spacing:.21em; text-transform:uppercase; }
        .hero-collection-note strong { font-family:"Arial Black", "Helvetica Neue", Arial, sans-serif; font-size:.87rem; font-weight:800; letter-spacing:.15em; line-height:1.45; text-transform:uppercase; }
        .hero-collection-note small { margin-top:8px; padding-top:7px; border-top:1px solid #171526; font-family:"Helvetica Neue", Arial, sans-serif; font-size:.59rem; font-weight:800; letter-spacing:.19em; }
        .hero-reflect-code { position:absolute; z-index:3; left:clamp(24px,8vw,110px); bottom:calc(12% + 72px); max-width:350px; }
        .hero-reflect-code > span { display:block; margin-bottom:7px; color:rgba(21,20,37,.62); font-size:.55rem; font-weight:900; letter-spacing:.19em; text-transform:uppercase; }
        .hero-reflect-code p { display:flex; flex-wrap:wrap; gap:4px 11px; margin:0; color:#272436; font-size:.56rem; font-weight:750; letter-spacing:.05em; line-height:1.5; text-transform:uppercase; }
        .hero-reflect-code em { font-style:normal; white-space:nowrap; }
        .hero-reflect-code b { color:var(--accent); font-size:.71rem; }
        @media (max-width:1024px) { .yellow-hero { min-height:650px; height:calc(100vh - 90px); } .hero-wordmark { top:48%; font-size:clamp(7rem,19vw,12rem); } .hero-model { width:min(65vw,570px); transform:translateX(-38%); } .hero-side-copy { top:14%; } .hero-collection-note { right:30px; } .hero-reflect-code { max-width:255px; } }
        @media (max-width:640px) { .yellow-hero { min-height:680px; height:calc(100svh - 76px); max-height:none; } .hero-wordmark { top:46%; font-size:clamp(5.5rem,25.5vw,9rem); letter-spacing:-.1em; } .hero-model { top:13%; left:54%; width:96vw; height:76%; transform:translateX(-50%); } .hero-side-copy { top:8%; left:24px; } .hero-kicker { margin-bottom:7px; font-size:.54rem; } .hero-side-copy p { font-size:.75rem; letter-spacing:.13em; } .hero-main-action { bottom:5%; left:24px; gap:12px; } .hero-main-action a { font-size:.58rem; } .hero-main-action a:first-child { padding:13px 14px; } .hero-collection-note { right:21px; bottom:6%; } .hero-collection-note span { font-size:.48rem; } .hero-collection-note strong { font-size:.65rem; } .hero-collection-note small { font-size:.45rem; } .hero-reflect-code { left:24px; bottom:calc(5% + 61px); max-width:207px; } .hero-reflect-code > span { margin-bottom:4px; font-size:.44rem; } .hero-reflect-code p { gap:1px 7px; font-size:.42rem; } .hero-reflect-code b { font-size:.52rem; } }
        @media (max-width:390px) { .yellow-hero { min-height:640px; } .hero-wordmark { font-size:5.25rem; } .hero-model { width:102vw; } .hero-main-action { gap:8px; } .hero-main-action a:first-child { padding:12px 11px; } .hero-collection-note { right:15px; } .hero-reflect-code { max-width:185px; } }
      `}</style>
    </section>
  );
}
