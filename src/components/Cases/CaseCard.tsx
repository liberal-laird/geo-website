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
  // Create schema for individual case study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": title,
    "description": description,
    "about": category,
    "outcome": results.join(", "),
    "technology": technologies,
    "provider": {
      "@type": "Organization",
      "name": "AI Marketing Solutions"
    }
  };

  return (
    <Card className="case-card" itemScope itemType="https://schema.org/CaseStudy">
      {/* Individual Case Study Schema */}
      <script type="application/ld+json">
        {JSON.stringify(caseStudySchema)}
      </script>

      <div className="case-category" itemProp="about">{category}</div>
      <h3 className="case-title" itemProp="name">{title}</h3>
      <p className="case-description" itemProp="description">{description}</p>

      <div className="case-results">
        <h4>成果:</h4>
        <ul itemProp="outcome">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

      <div className="case-tech">
        <h4>技术:</h4>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag" itemProp="technology">{tech}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CaseCard;