type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span style={{
      display: 'inline-flex',
      borderRadius: '100px',
      background: 'var(--accent-soft)',
      padding: '4px 12px',
      fontSize: '0.7rem',
      fontWeight: '700',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      border: '1px solid rgba(74, 158, 186, 0.2)',
    }}>
      {text}
    </span>
  );
}