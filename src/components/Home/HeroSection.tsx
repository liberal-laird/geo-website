import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Button from '../Shared/Button';
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{SITE_CONTENT.HERO.TITLE}</h1>
          <p className="hero-subtitle">{SITE_CONTENT.HERO.SUBTITLE}</p>
          <div className="hero-buttons">
            <Button
              variant="primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hero-btn-primary"
            >
              {SITE_CONTENT.HERO.PRIMARY_CTA}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const casesSection = document.getElementById('cases');
                if (casesSection) {
                  casesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hero-btn-secondary"
            >
              {SITE_CONTENT.HERO.SECONDARY_CTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;