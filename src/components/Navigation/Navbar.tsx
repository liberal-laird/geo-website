import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Button from '../Shared/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu after clicking
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('#home');
        }}>
          <span className="logo-text">Geo<span className="ai-accent">AI</span></span>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          {SITE_CONTENT.NAVIGATION.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <Button
              variant="primary"
              onClick={() => scrollToSection('#contact')}
              className="nav-cta"
            >
              联系我们
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="mobile-nav-menu">
          {SITE_CONTENT.NAVIGATION.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <Button
              variant="primary"
              onClick={() => scrollToSection('#contact')}
              className="nav-cta"
            >
              联系我们
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;