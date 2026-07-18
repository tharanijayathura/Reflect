import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
};

const styles = {
  primary: {
    background: 'var(--navy)',
    color: 'var(--c-white)',
    border: 'none',
    boxShadow: '0 4px 16px rgba(15,37,51,0.15)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '1.5px solid var(--navy)',
    boxShadow: 'none',
  },
  ghost: {
    background: 'var(--c-light-teal)',
    color: 'var(--navy)',
    border: '1px solid var(--border)',
    boxShadow: 'none',
  },
};

export default function Button({ children, href, variant = 'primary', className = '', onClick, type = 'button', disabled, style }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '100px',
    fontSize: '0.9rem',
    fontWeight: '700',
    letterSpacing: '0.03em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.25s ease',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    ...styles[variant],
    ...style,
  };

  if (href) {
    return <Link href={href} style={baseStyle} className={className}>{children}</Link>;
  }

  return (
    <button style={baseStyle} className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}