import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Section from '../Shared/Section';
import ServiceCard from './ServiceCard';
import TechStack from './TechStack';

const AIServicesSection: React.FC = () => {
  return (
    <Section id="ai-services" title={SITE_CONTENT.AI_SERVICES.TITLE}>
      <p className="ai-description">{SITE_CONTENT.AI_SERVICES.DESCRIPTION}</p>

      <div className="services-grid grid-2">
        {SITE_CONTENT.AI_SERVICES.SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <TechStack />
    </Section>
  );
};

export default AIServicesSection;