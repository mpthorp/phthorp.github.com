import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { Container } from './Container';

interface NavItem {
  name: string;
  path: string;
}

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
    opacity: number;
  }>({ width: 0, left: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Practice & Experience', path: '/practice' },
    { name: 'Community & Leadership', path: '/community' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  // Update underline position based on active item
  useEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      
      const activeLink = navRef.current.querySelector(`[data-path="${location.pathname}"]`) as HTMLElement;
      if (activeLink) {
        // Force a reflow to ensure accurate measurements
        navRef.current.getBoundingClientRect();
        
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        
        console.log('Nav rect:', navRect);
        console.log('Link rect:', linkRect);
        console.log('Calculated left:', linkRect.left - navRect.left);
        
        setUnderlineStyle({
          width: linkRect.width,
          left: linkRect.left - navRect.left,
          opacity: 1
        });
      }
    };

    // Small delay to ensure layout is complete
    const timeout = setTimeout(updateUnderline, 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Handle hover effects
  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navRef.current) return;
    
    const target = event.currentTarget;
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();
    
    setUnderlineStyle({
      width: linkRect.width,
      left: linkRect.left - navRect.left,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    if (!navRef.current) return;
    
    // Return to active item position
    const activeLink = navRef.current.querySelector(`[data-path="${location.pathname}"]`) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
        opacity: 1
      });
    } else {
      setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <>
      <header className="bg-tertiary-500 text-secondary-200 relative z-40 sticky top-0 px-5 md:px-8 lg:px-16">
        <Container>
          <div className="flex items-center py-2 md:py-6">
            {/* Mobile Menu Button - Left Side on Mobile */}
            <button 
              className="md:hidden p-2 -mb-1 hover:text-secondary-500"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="list" className="w-8 h-8" />
            </button>

            {/* Logo/Brand - Centered on Mobile, Left on Desktop */}
            <div className="flex-1 md:flex-none">
              <Link 
                to="/" 
                className="text-2xl font-bold hover:text-secondary-500 transition-colors duration-200 block mr-12 md:mr-0 text-center md:text-left"
              >
                Peter Thorp
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav 
              ref={navRef}
              className="hidden md:flex ml-auto relative"
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  data-path={item.path}
                  className="md:mx-2 lg:mx-4 text-sm lg:text-base font-medium transition-colors duration-200 py-1 hover:text-secondary-500 relative z-10"
                  onMouseEnter={handleMouseEnter}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Animated Underline */}
              <div
                className="absolute bottom-0 h-px bg-secondary-300 transition-all duration-300 ease-out"
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`,
                  opacity: underlineStyle.opacity,
                }}
              />
            </nav>
             {/* Hero Header Section - Clean with just name, title, and image */}
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out ${
            isMobileMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Slide-out Menu */}
        <div className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-tertiary-500 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-tertiary-400">
              <Link 
                to="/" 
                className="text-xl font-bold text-secondary-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Peter Thorp
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-secondary-100 hover:text-secondary-200"
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 hover:bg-tertiary-400 hover:bg-opacity-30 ${
                    isActive(item.path) 
                      ? 'text-secondary-100 bg-tertiary-400 bg-opacity-30 border-r-4 border-secondary-200' 
                      : 'text-secondary-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
