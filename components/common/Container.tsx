import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Container({ children, className = '', style }: ContainerProps) {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}