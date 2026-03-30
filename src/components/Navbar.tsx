import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`glass`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>
          <img src="/logo.jpg" alt="Pachi's Time" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--accent-gold)' }} onError={(e) => e.currentTarget.style.display = 'none'} />
          PACHI<span style={{ color: 'var(--accent-gold)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          style={{ display: 'none', color: 'var(--text-main)' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className="mobile-menu"
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
          borderBottom: '1px solid var(--glass-border)'
        }}
      >
        {['Work', 'About', 'Experience', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-main)' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
      
      {/* Basic responsive style injection for navbar */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
