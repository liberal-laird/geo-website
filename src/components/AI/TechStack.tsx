import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';

const TechStack: React.FC = () => {
  const { title, items } = SITE_CONTENT.AI_SERVICES.TECH_STACK;

  return (
    <div className="tech-stack">
      <h3 className="tech-stack-title">{title}</h3>
      <div className="tech-stack-items">
        {items.map((item, index) => (
          <span key={index} className="tech-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;