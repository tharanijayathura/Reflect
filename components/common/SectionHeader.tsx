type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '32px', maxWidth: '640px' }}>
      {eyebrow ? (
        <p style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '8px',
        }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: '900',
        letterSpacing: '-0.02em',
        color: 'var(--text-primary)',
        lineHeight: 1.1,
      }}>
        {title}
      </h2>
      {description ? (
        <p style={{
          marginTop: '12px',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
        }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}