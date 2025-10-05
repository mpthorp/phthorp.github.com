import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  style,
}) => {
  return (
    <section
      className={`flex flex-col px-6 py-20 md:px-8 md:py-20 lg:py-16 lg:py-32 gap-16 lg:gap-32 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};