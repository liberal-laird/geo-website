import React from 'react';
import Card from '../Shared/Card';

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  technologies: string[];
}

const CaseCard: React.FC<CaseCardProps> = ({
  title,
  category,
  description,
  results,
  technologies
}) => {
  return (
    <Card className="case-card">
      <div className="case-category">{category}</div>
      <h3 className="case-title">{title}</h3>
      <p className="case-description">{description}</p>

      <div className="case-results">
        <h4>成果:</h4>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

      <div className="case-tech">
        <h4>技术:</h4>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CaseCard;