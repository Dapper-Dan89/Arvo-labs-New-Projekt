import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark">
      <div className="pt-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
