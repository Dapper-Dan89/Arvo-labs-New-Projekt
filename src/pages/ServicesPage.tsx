import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { CheckCircle, ArrowRight, Star, Users, Clock, Target } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      ...t.services.strategic,
      icon: '🧠',
      color: 'from-blue-500 to-arvo-accent',
      image: '/imgs/ai_consulting_tech_innovation_brain_illustration.jpg',
      details: [
        'Detaillierte Analyse Ihrer aktuellen Geschäftsprozesse',
        'Identifikation von KI-Einsatzpotenzialen mit ROI-Bewertung',
        'Strategische Roadmap für die nächsten 12 Monate',
        'Konkrete Tool-Empfehlungen passend zu Ihrem Budget',
        'Zwei Follow-up Termine zur Implementierungsbegleitung',
        'Workshop-Materialien und Dokumentation'
      ]
    },
    {
      ...t.services.recruiting,
      icon: '🎯',
      color: 'from-green-500 to-emerald-400',
      image: '/imgs/ai_powered_tech_recruiting_illustration.jpg',
      details: [
        'Setup eines automatisierten Recruiting-Funnels',
        'KI-basierte Vorauswahl von Bewerbungsunterlagen',
        'Strukturierte Interview-Guides und Bewertungsmatrizen',
        'Algorithmus-basiertes Candidate-Matching',
        'Umfassende Team-Schulungen für neue Prozesse',
        'Integration mit bestehenden HR-Tools'
      ]
    },
    {
      ...t.services.automation,
      icon: '⚡',
      color: 'from-purple-500 to-pink-400',
      image: '/imgs/modern_business_workflow_automation_tech_illustration.jpg',
      details: [
        'Professionelle Tool-Installation und Konfiguration',
        'Maßgeschneidertes Workflow-Design für Ihre Prozesse',
        'API-Integrationen zwischen verschiedenen Plattformen',
        'Ausführliche Team-Schulungen und Dokumentation',
        '30 Tage intensiver Support nach dem Go-Live',
        'Performance-Monitoring und Optimierungsempfehlungen'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Kostenlose Analyse',
      duration: '30 Min',
      description: 'Wir analysieren Ihre aktuellen Prozesse und identifizieren Optimierungspotenziale.',
      icon: Target
    },
    {
      step: '2',
      title: 'Strategische Planung',
      duration: '1-2 Wochen',
      description: 'Entwicklung einer maßgeschneiderten KI-Strategie mit konkreten Umsetzungsschritten.',
      icon: Users
    },
    {
      step: '3',
      title: 'Implementierung',
      duration: '4-8 Wochen',
      description: 'Professionelle Umsetzung der geplanten Maßnahmen mit regelmäßigen Updates.',
      icon: Clock
    },
    {
      step: '4',
      title: 'Support & Optimierung',
      duration: 'Ongoing',
      description: 'Kontinuierliche Betreuung und Optimierung für maximalen Erfolg.',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-arvo-dark to-arvo-border-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              {t.services.headline}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
              Drei bewährte Services für Ihren nachhaltigen KI-Erfolg
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Service Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="lg:w-1/2">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-3xl font-bold text-arvo-accent">{service.price}</span>
                  </div>
                  <p className="text-xl text-arvo-text-secondary mb-8">
                    {service.description}
                  </p>

                  {/* Detailed Features */}
                  <h3 className="text-2xl font-semibold text-arvo-dark dark:text-white mb-6">
                    Was Sie erhalten:
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-arvo-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-arvo-accent/25 flex items-center space-x-2">
                    <span>Kostenlose Beratung buchen</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Package Highlight */}
      <section className="py-20 bg-gradient-to-br from-arvo-accent/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-12 backdrop-blur-sm border-2 border-arvo-accent/30">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl font-bold text-arvo-dark dark:text-white">
                {t.services.combo.title}
              </h2>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-6">
              <span className="text-5xl font-bold text-arvo-accent">{t.services.combo.price}</span>
              <span className="text-2xl text-arvo-text-secondary line-through">{t.services.combo.originalPrice}</span>
            </div>
            
            <p className="text-2xl text-green-600 font-semibold mb-4">{t.services.combo.savings}</p>
            <p className="text-xl text-arvo-text-secondary mb-6">{t.services.combo.description}</p>
            <p className="text-arvo-text-secondary mb-8">{t.services.combo.duration}</p>
            
            <button className="bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-bold py-5 px-12 rounded-xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-arvo-accent/25">
              Kombi-Paket jetzt buchen
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-8">
              Unser bewährter Prozess
            </h2>
            <p className="text-xl text-arvo-text-secondary max-w-3xl mx-auto">
              Von der ersten Analyse bis zum erfolgreichen Go-Live – so läuft Ihr Projekt ab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-arvo-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-arvo-accent" />
                  </div>
                  <div className="text-4xl font-bold text-arvo-accent mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-arvo-dark dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <div className="text-sm text-arvo-accent font-semibold mb-4">
                    {step.duration}
                  </div>
                  <p className="text-arvo-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
