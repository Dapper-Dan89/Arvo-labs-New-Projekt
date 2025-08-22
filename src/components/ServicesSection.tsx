import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Background color transition
    gsap.to(section, {
      backgroundColor: '#F5F5F5',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Cards animation
    gsap.fromTo(
      '.service-card',
      { 
        y: 100, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const services = [
    {
      ...t.services.strategic,
      icon: '🧠',
      color: 'from-blue-500 to-arvo-accent',
      image: '/imgs/ai_consulting_tech_innovation_brain_illustration.jpg'
    },
    {
      ...t.services.recruiting,
      icon: '🎯',
      color: 'from-green-500 to-emerald-400',
      image: '/imgs/ai_powered_tech_recruiting_illustration.jpg'
    },
    {
      ...t.services.automation,
      icon: '⚡',
      color: 'from-purple-500 to-pink-400',
      image: '/imgs/modern_business_workflow_automation_tech_illustration.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-arvo-dark transition-colors duration-1000"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={contentRef}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-arvo-dark dark:text-white mb-8">
              Die Lösung
            </h2>
            <p className="text-xl sm:text-2xl text-arvo-text-secondary max-w-4xl mx-auto">
              {t.services.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
              >
                {/* Service Image */}
                <div className="relative mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                {/* Service Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-arvo-dark dark:text-white mb-2 group-hover:text-arvo-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-arvo-accent">{service.price}</span>
                  </div>
                  <p className="text-arvo-text-secondary">{service.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-arvo-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full group/btn bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-arvo-accent/25 flex items-center justify-center space-x-2">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Combo Package Highlight */}
          <div className="service-card bg-gradient-to-br from-arvo-accent/10 to-blue-500/10 border-2 border-arvo-accent/30 rounded-3xl p-8 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h3 className="text-3xl font-bold text-arvo-dark dark:text-white">
                {t.services.combo.title}
              </h3>
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl font-bold text-arvo-accent">{t.services.combo.price}</span>
              <span className="text-xl text-arvo-text-secondary line-through">{t.services.combo.originalPrice}</span>
            </div>
            
            <p className="text-green-600 font-semibold mb-3">{t.services.combo.savings}</p>
            <p className="text-arvo-text-secondary mb-4">{t.services.combo.description}</p>
            <p className="text-sm text-arvo-text-secondary mb-6">{t.services.combo.duration}</p>
            
            <button className="bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-arvo-accent/25">
              Kombi-Paket buchen
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-arvo-dark pointer-events-none"></div>
    </section>
  );
};

export default ServicesSection;
