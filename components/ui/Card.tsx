import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'
    : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-md ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
