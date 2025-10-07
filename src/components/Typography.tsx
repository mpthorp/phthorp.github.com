import React from 'react';

// Typography component props
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // for additional props
}

// H1 Component - 64px font, 130% line-height
export const H1: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  return (
    <h1 className={`text-[40px] md:text-[48px] lg:text-[64px] leading-[130%] text-primary-500 font-bold mt-0 ${className}`} {...props}>
      {children}
    </h1>
  );
};

// H2 Component - 40px font, 130% line-height
export const H2: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-6 md:mb-8';
  return (
    <h2 className={`text-[28px] md:text-[32px] lg:text-[40px] leading-[130%] text-primary-500 font-bold mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </h2>
  );
};

// H3 Component - 32px font, 130% line-height
export const H3: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-3 md:mb-4';
  return (
    <h3 className={`text-[24px] lg:text-[32px] leading-[130%] text-primary-500 font-bold mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </h3>
  );
};

// H4 Component - 24px font, 130% line-height
export const H4: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-1 md:mb-2';
  return (
    <h4 className={`text-[20px] lg:text-[24px] leading-[130%] text-primary-500 font-bold mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </h4>
  );
};

// P namespace components - Direct definitions

// P.xl Component - 32px font, 160% line-height (p tag)
const P_XL: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-10';
  return (
    <p className={`text-[20px] md:text-[24px] lg:text-[32px] leading-[160%] text-neutral-500 mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </p>
  );
};

// P.lg Component - 24px font, 160% line-height (p tag)
const P_LG: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-10';
  return (
    <p className={`text-[20px] lg:text-[24px] leading-[160%] text-neutral-500 mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </p>
  );
};

// P Component - 20px font, 160% line-height (p tag) - Default body text
const P_MD: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-6 md:mb-10';
  return (
    <p className={`text-[16px] lg:text-[20px] leading-[160%] text-neutral-500 mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </p>
  );
};

// P.sm Component - 16px font, 150% line-height (p tag)
const P_SM: React.FC<TypographyProps> = ({ children, className = '', ...props }) => {
  // Set default margin-bottom only if no margin-bottom class is provided
  const defaultMargin = className.includes('mb-') ? '' : 'mb-6 md:mb-8';
  return (
    <p className={`text-[14px] lg:text-[16px] leading-[150%] text-neutral-500 mt-0 ${defaultMargin} ${className}`} {...props}>
      {children}
    </p>
  );
};

// Create P namespace with direct component references
export const P = Object.assign(P_MD, {
  xl: P_XL,
  lg: P_LG,
  sm: P_SM
});


// Default export with clean component structure
const Typography = {
  H1,
  H2,
  H3,
  H4,
  P
};

export default Typography;
