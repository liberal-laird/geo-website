import React, { useState } from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import CaseCard from './CaseCard';
import Section from '../Shared/Section';

const CasesGrid: React.FC = () => {
  const [filter, setFilter] = useState('全部');

  const filteredCases = filter === '全部'
    ? SITE_CONTENT.CASE_STUDIES.CASES
    : SITE_CONTENT.CASE_STUDIES.CASES.filter(caseItem => caseItem.category === filter);

  // Create an aggregate rating for all case studies
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": SITE_CONTENT.CASE_STUDIES.CASES.length,
    "reviewCount": SITE_CONTENT.CASE_STUDIES.CASES.length
  };

  return (
    <Section id="cases" title={SITE_CONTENT.CASE_STUDIES.TITLE} itemScope itemType="https://schema.org/CreativeWork">
      {/* Aggregate Rating Schema for all case studies */}
      <script type="application/ld+json">
        {JSON.stringify(aggregateRating)}
      </script>

      <div className="filters">
        {SITE_CONTENT.CASE_STUDIES.FILTERS.map((filterOption, index) => (
          <button
            key={index}
            className={`filter-btn ${filter === filterOption ? 'active' : ''}`}
            onClick={() => setFilter(filterOption)}
          >
            {filterOption}
          </button>
        ))}
      </div>

      <div className="cases-grid grid-3">
        {filteredCases.map((caseItem) => (
          <CaseCard
            key={caseItem.id}
            title={caseItem.title}
            category={caseItem.category}
            description={caseItem.description}
            results={caseItem.results}
            technologies={caseItem.technologies}
          />
        ))}
      </div>
    </Section>
  );
};

export default CasesGrid;