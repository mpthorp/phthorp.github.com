import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col bg-secondary-200">
      <Navigation />
      <main className="flex-grow flex flex-col text-[16px] lg:text-[20px] leading-[160%] text-neutral-500">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;