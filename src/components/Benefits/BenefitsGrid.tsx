import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import BenefitCard from './BenefitCard';
import Section from '../Shared/Section';

const BenefitsGrid: React.FC = () => {
  return (
    <Section id="benefits" title={SITE_CONTENT.BENEFITS.TITLE}>
      <div className="grid-3">
        {SITE_CONTENT.BENEFITS.ITEMS.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default BenefitsGrid;