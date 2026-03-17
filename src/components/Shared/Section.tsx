import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className = ''
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      {(title || subtitle) && (
        <div className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle text-secondary">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;