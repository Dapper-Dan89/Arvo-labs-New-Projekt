import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResultsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const counters = countersRef.current;

    if (!section || !counters) return;

    // Background transition
    gsap.to(section, {
      backgroundColor: '#171717',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Counter animations
    const counterElements = counters.querySelectorAll('.counter-value');
    
    counterElements.forEach((counter, index) => {
      const target = t.results.kpis[index].value;
      const isPercentage = target.includes('%');
      const isMultiplier = target.includes('x');
      const numericValue = isPercentage 
        ? parseInt(target.replace('%', ''))
        : isMultiplier 
          ? parseInt(target.replace('x', ''))
          : parseInt(target);

      gsap.fromTo(counter, 
        { textContent: 0 },
        {
          textContent: numericValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            onUpdate: function() {
              const currentValue = Math.floor(parseFloat(counter.textContent || '0'));
              if (isPercentage) {
                counter.textContent = currentValue + '%';
              } else if (isMultiplier) {
                counter.textContent = currentValue + 'x';
              } else {
                counter.textContent = currentValue.toString();
              }
            }
          }
        }
      );
    });

    // Case studies animation
    gsap.fromTo(
      '.case-study-card',
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.case-studies-grid',
          start: 'top 80%',
        }
      }
    );
  }, [t.results.kpis]);

  const caseStudies = [
    {
      company: 'Digital Agency',
      industry: 'Marketing',
      result: '35% weniger Admin-Zeit',
      description: '50% weniger Fehler durch automatisierte Workflows',
      image: '/imgs/business_growth_success_tech_illustration_case_study.jpg',
      stats: [
        { label: 'Admin-Zeit gespart', value: '35%' },
        { label: 'Fehlerreduktion', value: '50%' },
        { label: 'ROI erreicht in', value: '3 Monaten' }
      ]
    },
    {
      company: 'FinTech Startup',
      industry: 'Finanzdienstleistungen',
      result: '2x schnellere Vorqualifizierung',
      description: '60% weniger Time-to-Hire durch KI-Recruiting',
      image: '/imgs/business_growth_success_tech_illustration_rocket_launch.jpg',
      stats: [
        { label: 'Recruiting-Speed', value: '2x' },
        { label: 'Time-to-Hire', value: '-60%' },
        { label: 'Candidate-Quality', value: '+40%' }
      ]
    },
    {
      company: 'Handwerksbetrieb',
      industry: 'Handwerk',
      result: '40% kürzere Durchlaufzeiten',
      description: '25% mehr Umsatz durch optimierte Prozesse',
      image: '/imgs/tech_consulting_it_strategy_planning_diagram.jpg',
      stats: [
        { label: 'Durchlaufzeit', value: '-40%' },
        { label: 'Umsatzsteigerung', value: '+25%' },
        { label: 'Kundenzufriedenheit', value: '+30%' }
      ]
    }
  ];

  const kpiIcons = [TrendingUp, Users, Clock, Target];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-arvo-light dark:bg-arvo-dark transition-colors duration-1000 py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-arvo-dark dark:text-white mb-8">
            {t.results.headline}
          </h2>
          <p className="text-xl sm:text-2xl text-arvo-text-secondary max-w-4xl mx-auto">
            {t.results.description}
          </p>
        </div>

        {/* KPIs Grid */}
        <div ref={countersRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {t.results.kpis.map((kpi, index) => {
            const Icon = kpiIcons[index];
            return (
              <div
                key={index}
                className="text-center bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20"
              >
                <Icon className="w-12 h-12 text-arvo-accent mx-auto mb-4" />
                <div className="counter-value text-5xl font-bold text-arvo-accent mb-2">
                  0
                </div>
                <p className="text-arvo-text-secondary font-medium">{kpi.label}</p>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="case-studies-grid grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="case-study-card group bg-white dark:bg-arvo-border-dark/50 rounded-3xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-arvo-accent/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arvo-dark/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-arvo-accent/90 text-arvo-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {study.industry}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-arvo-dark dark:text-white mb-2 group-hover:text-arvo-accent transition-colors duration-300">
                  {study.company}
                </h3>
                <div className="text-lg font-semibold text-arvo-accent mb-4">
                  {study.result}
                </div>
                <p className="text-arvo-text-secondary mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-xl font-bold text-arvo-accent">{stat.value}</div>
                      <div className="text-xs text-arvo-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-arvo-accent/10 pointer-events-none"></div>
    </section>
  );
};

export default ResultsSection;
