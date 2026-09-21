'use client';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const perks = [
  {
    icon: LocalShippingOutlinedIcon,
    badge: 'Fast',
    title: 'Free Delivery',
    description: 'Free shipping on every order over Rs. 3,000, tracked door to door.',
  },
  {
    icon: PaymentsOutlinedIcon,
    badge: 'Flexible',
    title: 'Cash on Delivery',
    description: 'No card, no prepay. Settle up when the courier hands it over.',
  },
  {
    icon: AssignmentReturnOutlinedIcon,
    badge: 'Hassle-free',
    title: 'Easy Returns',
    description: "Didn't work out? Send it back within a week, no questions asked.",
  },
  {
    icon: WorkspacePremiumOutlinedIcon,
    badge: 'Trusted',
    title: 'Premium Quality',
    description: 'Comfort-first cotton, finished to hold its shape wear after wear.',
  },
];

export default function ServicesStrip() {
  return (
    <section className="rc-section">
      <div className="rc-board">
        <div className="rc-intro">
          <span className="rc-eyebrow">Reflect Care</span>
          <h2>Good things, all the way to your door.</h2>
          <p className="rc-summary">The little details that make shopping with Reflect feel easy.</p>
        </div>

        <div className="rc-list">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div className="rc-service" key={perk.title}>
                <span className="rc-number">0{index + 1}</span>
                <span className="rc-icon">
                  <Icon style={{ fontSize: 26 }} />
                </span>
                <div className="rc-body">
                  <div className="rc-title-row">
                    <h3>{perk.title}</h3>
                    <span className="rc-badge">{perk.badge}</span>
                  </div>
                  <p>{perk.description}</p>
                </div>
                <span className="rc-arrow" aria-hidden="true">&rarr;</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .rc-section {
          padding: 88px 24px 96px;
          background: #fff8e5;
          color: #171526;
        }

        .rc-board {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(28px, 5vw, 64px);
          display: grid;
          grid-template-columns: minmax(220px, 0.75fr) minmax(0, 1.5fr);
          gap: clamp(36px, 7vw, 112px);
          background: #8a5a3f;
          border-radius: 28px;
          color: #fffdf7;
          overflow: hidden;
        }

        .rc-intro {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .rc-eyebrow {
          display: inline-block;
          padding: 6px 14px 7px;
          background: #ffd84d;
          border: 1.5px solid #ffd84d;
          border-radius: 3px;
          transform: rotate(-2.5deg);
          color: #8a5a3f;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .rc-intro h2 {
          margin: 0;
          max-width: 390px;
          font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: -0.045em;
          line-height: 1.08;
          text-transform: uppercase;
        }

        .rc-summary {
          max-width: 300px;
          margin: 22px 0 0;
          color: rgba(255, 253, 247, 0.68);
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .rc-list {
          border-top: 1px solid rgba(255, 253, 247, 0.26);
        }

        .rc-service {
          min-height: 112px;
          display: grid;
          grid-template-columns: 32px 54px minmax(0, 1fr) 24px;
          align-items: center;
          gap: 18px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255, 253, 247, 0.26);
          transition: padding 0.3s ease, background 0.3s ease;
        }

        .rc-service:hover {
          padding-left: 12px;
          padding-right: 12px;
          background: rgba(255, 253, 247, 0.06);
        }

        .rc-number {
          color: rgba(255, 253, 247, 0.48);
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .rc-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          background: #ffd84d;
          border-radius: 50%;
          color: #8a5a3f;
          transition: transform 0.3s ease;
        }

        .rc-service:hover .rc-icon { transform: rotate(-8deg) scale(1.08); }

        .rc-body {
          min-width: 0;
        }

        .rc-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .rc-body h3 {
          margin: 0;
          font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .rc-badge {
          color: #ffd84d;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .rc-body p {
          margin: 7px 0 0;
          color: rgba(255, 253, 247, 0.68);
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.87rem;
          line-height: 1.55;
        }

        .rc-arrow {
          color: #ffd84d;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
        }

        @media (prefers-reduced-motion: reduce) {
          .rc-service, .rc-icon { transition: none; }
        }

        @media (max-width: 760px) {
          .rc-section { padding: 64px 16px 72px; }
          .rc-board {
            grid-template-columns: 1fr;
            gap: 36px;
            border-radius: 22px;
          }
          .rc-intro h2 { max-width: 520px; }
        }

        @media (max-width: 480px) {
          .rc-board { padding: 28px 20px 20px; }
          .rc-service {
            grid-template-columns: 26px 46px minmax(0, 1fr);
            gap: 12px;
            min-height: 0;
            padding: 18px 0;
          }
          .rc-service:hover { padding-left: 6px; padding-right: 6px; }
          .rc-icon { width: 46px; height: 46px; }
          .rc-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}