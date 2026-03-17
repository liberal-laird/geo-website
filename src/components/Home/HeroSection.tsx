import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Button from '../Shared/Button';
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section" itemScope itemType="https://schema.org/Product">
      <ParticleBackground />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" itemProp="name">{SITE_CONTENT.HERO.TITLE}</h1>
          <p className="hero-subtitle" itemProp="description">{SITE_CONTENT.HERO.SUBTITLE}</p>

          {/* Product Schema for the main service */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": SITE_CONTENT.HERO.TITLE,
              "description": SITE_CONTENT.HERO.SUBTITLE,
              "brand": {
                "@type": "Brand",
                "name": "AI Marketing Solutions"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0", // Custom pricing, contact for quote
                "priceCurrency": "USD",
                "seller": {
                  "@type": "Organization",
                  "name": "AI Marketing Solutions"
                }
              }
            })}
          </script>

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