import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { ChevronDown } from 'lucide-react';

const SimpleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(600px circle at 0% 0%, rgba(0, 210, 255, 0.15), transparent 50%),
            radial-gradient(600px circle at 100% 100%, rgba(0, 210, 255, 0.15), transparent 50%),
            linear-gradient(135deg, #171717 0%, #262626 50%, #171717 100%)
          `
        }}
      />
      
      {/* Floating particles effect with CSS */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-arvo-accent opacity-30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToNext = () => {
    const nextSection = document.getElementById('problem-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-arvo-dark text-white overflow-hidden">
      <SimpleBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="block">{t.hero.headline.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block text-arvo-accent">{t.hero.headline.split(' ').slice(2).join(' ')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-arvo-text-secondary">
            {t.hero.subheadline}
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            {t.hero.description}
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="group relative inline-flex items-center px-12 py-4 text-lg font-semibold text-arvo-dark bg-arvo-accent rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-arvo-accent/25 animate-pulse-glow">
              <span className="relative z-10">{t.hero.cta}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group animate-bounce"
      >
        <div className="flex flex-col items-center space-y-2 text-arvo-text-secondary hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium uppercase tracking-wider">
            {t.hero.scrollToExplore}
          </span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arvo-dark/20 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
