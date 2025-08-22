import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { AlertCircle, TrendingDown, Clock, Users } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLDivElement>(null);

  const problems = [
    {
      icon: TrendingDown,
      title: 'Ineffiziente Prozesse',
      description: 'KMU verlieren täglich Stunden durch manuelle, repetitive Aufgaben'
    },
    {
      icon: Clock,
      title: 'Zeitverschwendung',
      description: 'Bis zu 40% der Arbeitszeit wird für Admin-Tasks verschwendet'
    },
    {
      icon: Users,
      title: 'Recruiting-Chaos',
      description: 'Personalsuche dauert Monate und die Candidate-Experience leidet'
    },
    {
      icon: AlertCircle,
      title: 'Verpasste Chancen',
      description: 'KI-Potenziale bleiben ungenutzt, Wettbewerbsvorteile gehen verloren'
    }
  ];

  return (
    <section 
      id="problem-section"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-arvo-light dark:bg-arvo-light transition-colors duration-1000"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {/* Section Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-arvo-dark mb-8">
            Das Problem
          </h2>
          <p className="text-xl sm:text-2xl text-arvo-text-secondary max-w-4xl mx-auto mb-16">
            KMU und Startups kämpfen täglich mit ineffizienten Prozessen und verpassten KI-Chancen
          </p>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-arvo-accent/10"
              >
                <div className="mb-6">
                  <problem.icon className="w-12 h-12 text-red-500 group-hover:text-arvo-accent transition-colors duration-300 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-arvo-dark mb-4 group-hover:text-arvo-accent transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-arvo-text-secondary leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">67%</div>
              <div className="text-arvo-text-secondary">der KMU nutzen KI noch nicht</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">3.2h</div>
              <div className="text-arvo-text-secondary">Admin-Zeit täglich pro Mitarbeiter</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">45%</div>
              <div className="text-arvo-text-secondary">längere Time-to-Hire ohne KI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-arvo-dark pointer-events-none"></div>
    </section>
  );
};

export default ProblemSection;
