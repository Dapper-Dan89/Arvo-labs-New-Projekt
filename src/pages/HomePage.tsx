import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import ServicesSection from '../components/ServicesSection';
import ResultsSection from '../components/ResultsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ResultsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
