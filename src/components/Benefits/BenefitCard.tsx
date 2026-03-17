import React from 'react';
import Card from '../Shared/Card';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="benefit-card">
      <div className="benefit-icon">{icon || '✨'}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-description">{description}</p>
    </Card>
  );
};

export default BenefitCard;