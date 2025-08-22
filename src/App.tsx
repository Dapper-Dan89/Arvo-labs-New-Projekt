import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, LanguageProvider } from './contexts/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AIRecruitingPage from './pages/AIRecruitingPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import LegalPage from './pages/LegalPage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling behavior using native CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark text-arvo-dark dark:text-white transition-colors duration-500">
            <Header />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leistungen" element={<ServicesPage />} />
              <Route path="/ki-recruiting" element={<AIRecruitingPage />} />
              <Route path="/ueber-uns" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/datenschutz" element={<LegalPage type="privacy" />} />
              <Route path="/impressum" element={<LegalPage type="imprint" />} />
              <Route path="/agb" element={<LegalPage type="terms" />} />
            </Routes>
            
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
