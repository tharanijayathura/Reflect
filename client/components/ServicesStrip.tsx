'use client';

import Image from 'next/image';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const steps = [
  {
    number: '01',
    badge: 'Fast & Tracked',
    title: 'Free Islandwide Delivery',
    description:
      'Complimentary shipping on all orders over Rs. 3,000. Real-time door-to-door tracking with instant SMS and WhatsApp notifications across Sri Lanka.',
    icon: LocalShippingOutlinedIcon,
    highlights: ['Free over Rs. 3,000', '2–4 Business Days', 'Doorstep Real-time Tracking'],
    image: '/images/t01.png',
    accent: '#6c63ff',
  },
  {
    number: '02',
    badge: 'Zero Risk',
    title: 'Cash on Delivery',
    description:
      'Shop with 100% confidence. No card details or advance payments needed—simply inspect and settle when your courier hands over your package.',
    icon: PaymentsOutlinedIcon,
    highlights: ['Pay Upon Arrival', 'No Card Required', 'Islandwide COD Coverage'],
    image: '/images/t02.png',
    accent: '#10b981',
  },
  {
    number: '03',
    badge: 'Hassle-Free',
    title: '7-Day Easy Returns',
    description:
      'Didn’t fit or want another style? Enjoy our smooth 7-day doorstep pickup exchange with zero hidden fees and no questions asked.',
    icon: AssignmentReturnOutlinedIcon,
    highlights: ['7-Day Exchange Window', 'Home Courier Pickup', 'Instant Size Replacements'],
    image: '/images/t03.png',
    accent: '#f59e0b',
  },
  {
    number: '04',
    badge: 'Built to Last',
    title: 'Premium Quality Craft',
    description:
      'Engineered from 100% combed heavyweight cotton with reinforced neck ribbing and colorfast dyes that retain their shape and softness wash after wash.',
    icon: WorkspacePremiumOutlinedIcon,
    highlights: ['100% Combed Cotton', 'Pre-Shrunk Fabrics', 'Shape-Retaining Collar'],
    image: '/images/t04.png',
    accent: '#6c63ff',
  },
];

export default function ServicesStrip() {
  return (
    <section className="process-section">
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <div className="process-badge">
            <span className="process-badge-dot" />
            <span>Reflect Experience</span>
          </div>
          <h2 className="process-title">Good things, all the way to your door.</h2>
          <p className="process-subtitle">
            The little details that make shopping with Reflect feel effortless from browsing to unboxing.
          </p>
        </div>

        {/* Alternating Steps List */}
        <div className="process-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.number}
                className={`process-row ${isEven ? 'row-reverse' : ''}`}
              >
                {/* Content Block */}
                <div className="process-content">
                  <div className="content-meta">
                    <span className="step-tag" style={{ color: step.accent, borderColor: `${step.accent}33`, background: `${step.accent}12` }}>
                      {step.badge}
                    </span>
                    <div className="step-icon-wrap" style={{ background: `${step.accent}14`, color: step.accent }}>
                      <Icon style={{ fontSize: '1.2rem' }} />
                    </div>
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>

                  <div className="step-highlights">
                    {step.highlights.map((highlight) => (
                      <div key={highlight} className="highlight-item">
                        <CheckCircleOutlinedIcon style={{ fontSize: '0.95rem', color: step.accent }} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Block with User-Provided t01-t04 Graphic Image */}
                <div className="process-visual">
                  <div className="visual-card">
                    {/* User-Provided Step Graphic Image */}
                    <div className="visual-img-container">
                      <Image
                        src={step.image}
                        alt={`Reflect Step ${step.number} - ${step.title}`}
                        width={420}
                        height={260}
                        className="visual-graphic-img"
                        priority={index < 2}
                      />
                    </div>

                    {/* Subtle Ambient Glow */}
                    <div
                      className="visual-ambient-glow"
                      style={{
                        background: `radial-gradient(circle, ${step.accent}20 0%, rgba(255,255,255,0) 70%)`,
                      }}
                    />

                    {/* Corner Accent Badge */}
                    <div className="visual-corner-badge">
                      <span className="visual-corner-label">Step {step.number}</span>
                      <ArrowForwardIcon style={{ fontSize: '0.8rem' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-section {
          padding: 56px 24px 64px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .process-container {
          max-width: 1160px;
          margin: 0 auto;
        }

        /* Section Header */
        .process-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .process-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 100px;
          background: #f0eeff;
          border: 1px solid rgba(108, 99, 255, 0.2);
          color: #1a1a2e;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .process-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6c63ff;
        }

        .process-title {
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 10px;
        }

        .process-subtitle {
          font-size: clamp(0.92rem, 1.5vw, 1.05rem);
          color: #64748b;
          line-height: 1.55;
          font-weight: 400;
        }

        /* Timeline & Rows */
        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .process-row {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 36px;
          padding: 16px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .process-row:last-child {
          border-bottom: none;
        }

        .process-row.row-reverse {
          direction: rtl;
        }

        .process-row.row-reverse .process-content,
        .process-row.row-reverse .process-visual {
          direction: ltr;
        }

        /* Content Block */
        .process-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0 4px;
        }

        .content-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .step-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 6px;
          border: 1px solid;
        }

        .step-icon-wrap {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 850;
          color: #1a1a2e;
          letter-spacing: -0.025em;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 18px;
          max-width: 480px;
        }

        .step-highlights {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #1a1a2e;
        }

        /* Visual Block */
        .process-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 230px;
          border-radius: 22px;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(108, 99, 255, 0.12);
          box-shadow: 0 14px 30px rgba(26, 26, 46, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 18px;
          transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .visual-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 45px rgba(108, 99, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1);
          border-color: rgba(108, 99, 255, 0.3);
        }

        .visual-img-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .visual-graphic-img {
          object-fit: contain;
          max-height: 190px;
          width: auto;
          height: auto;
          transition: transform 0.4s ease;
        }

        .visual-card:hover .visual-graphic-img {
          transform: scale(1.05);
        }

        .visual-ambient-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .visual-corner-badge {
          position: absolute;
          bottom: 14px;
          right: 18px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.72rem;
          font-weight: 700;
          color: #1a1a2e;
          z-index: 3;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .process-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .process-row.row-reverse {
            direction: ltr;
          }

          .visual-card {
            max-width: 100%;
            height: 200px;
          }

          .visual-graphic-img {
            max-height: 160px;
          }

          .process-timeline {
            gap: 24px;
          }

          .process-section {
            padding: 44px 16px 48px;
          }
        }

        @media (max-width: 540px) {
          .process-header {
            margin-bottom: 24px;
          }

          .step-title {
            font-size: 1.35rem;
          }

          .visual-card {
            height: 180px;
            border-radius: 16px;
          }

          .visual-graphic-img {
            max-height: 140px;
          }
        }
      `}</style>
    </section>
  );
}