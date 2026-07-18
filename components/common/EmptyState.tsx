import Button from './Button';

type EmptyStateProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function EmptyState({ title, description, buttonText, buttonHref }: EmptyStateProps) {
  return (
    <div style={{
      borderRadius: '24px',
      border: '1.5px dashed var(--border-dark)',
      background: 'var(--bg-soft)',
      padding: '40px',
      textAlign: 'center',
    }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
        {title}
      </h3>
      <p style={{ maxWidth: '480px', margin: '0 auto 24px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
        {description}
      </p>
      {buttonText && buttonHref ? (
        <Button href={buttonHref}>{buttonText}</Button>
      ) : null}
    </div>
  );
}