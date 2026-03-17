import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Section from '../Shared/Section';
import ServiceCard from './ServiceCard';
import TechStack from './TechStack';

const AIServicesSection: React.FC = () => {
  // Generate HowTo schema for AI Services
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": SITE_CONTENT.AI_SERVICES.TITLE,
    "description": SITE_CONTENT.AI_SERVICES.DESCRIPTION,
    "step": SITE_CONTENT.AI_SERVICES.SERVICES.map((service, index) => ({
      "@type": "HowToStep",
      "name": service.title,
      " itemListElement": {
        "@type": "HowToDirection",
        "description": service.description
      }
    }))
  };

  // Generate FAQPage schema for common questions about AI services
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "什么是AI大模型营销?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI大模型营销是利用先进的人工智能技术，特别是大规模语言模型和深度学习算法，来自动化营销流程、个性化用户体验并与现有系统集成的一种新型营销方式。"
        }
      },
      {
        "@type": "Question",
        "name": "AI营销如何提高转化率?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI持续学习和优化营销策略，通过精准目标定位、个性化内容生成和实时营销优化来提升转化率。"
        }
      },
      {
        "@type": "Question",
        "name": "AI营销解决方案可以跨平台整合吗?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的，我们的AI营销解决方案支持跨平台整合，可以统一管理多渠道营销活动，确保一致的品牌传播。"
        }
      }
    ]
  };

  return (
    <Section id="ai-services" title={SITE_CONTENT.AI_SERVICES.TITLE}>
      {/* HowTo Schema for AI Services */}
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>

      {/* FAQPage Schema for common questions */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

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