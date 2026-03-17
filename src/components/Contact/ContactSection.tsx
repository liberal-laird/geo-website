import React from 'react';
import { SITE_CONTENT } from '../../utils/constants';
import Section from '../Shared/Section';
import ContactInfo from './ContactInfo';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title={SITE_CONTENT.CONTACT.TITLE}>
      <p className="contact-description">{SITE_CONTENT.CONTACT.DESCRIPTION}</p>

      <div className="contact-container single">
        <div className="contact-info-section">
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;