import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const styles = {
  primary: 'bg-zinc-900 !text-white hover:bg-zinc-700',
  secondary: 'border border-zinc-900 bg-transparent text-zinc-900 hover:bg-zinc-900 hover:text-white',
  ghost: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
};

export default function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  const base = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition ${styles[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }

  return <button className={base}>{children}</button>;
}