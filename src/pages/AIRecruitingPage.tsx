import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import { ArrowRight, CheckCircle, Star, Users, Clock } from 'lucide-react';

const AIRecruitingPage: React.FC = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      title: '2x schnellere Prozesse',
      description: 'Automatisierte Vorauswahl reduziert die Zeit bis zur ersten Interaktion drastisch',
      icon: Clock,
      stat: '67% weniger Zeit für Screening'
    },
    {
      title: '30% besserer Candidate Fit',
      description: 'KI-Algorithmen bewerten Kandidaten objektiver und präziser',
      icon: Users,
      stat: '40% weniger Fehlbesetzungen'
    },
    {
      title: 'Skalierbare Prozesse',
      description: 'Bearbeiten Sie 10x mehr Bewerbungen ohne zusätzliche Ressourcen',
      icon: Star,
      stat: '300% mehr Bewerbungen verarbeitbar'
    }
  ];

  const features = [
    {
      title: 'Intelligente CV-Analyse',
      description: 'KI scannt und bewertet Lebensläufe nach Ihren individuellen Kriterien',
      image: '/imgs/ai_powered_tech_recruiting_illustration.jpg'
    },
    {
      title: 'Automatisierter Funnel',
      description: 'Von der Bewerbung bis zum Interview - alles automatisch orchestriert',
      image: '/imgs/modern_business_workflow_automation_tech_illustration.jpg'
    },
    {
      title: 'Candidate Scoring',
      description: 'Objektive Bewertung basierend auf Skills, Erfahrung und Cultural Fit',
      image: '/imgs/professional_tech_consulting_interface.jpg'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Setup & Integration',
      description: 'Wir integrieren unsere KI in Ihre bestehenden Recruiting-Tools',
      duration: '1-2 Wochen'
    },
    {
      step: 2,
      title: 'Training & Kalibrierung',
      description: 'Die KI lernt Ihre spezifischen Anforderungen und Präferenzen',
      duration: '1 Woche'
    },
    {
      step: 3,
      title: 'Go-Live & Optimierung',
      description: 'Start des automatisierten Recruitings mit kontinuierlicher Verbesserung',
      duration: '1 Woche'
    },
    {
      step: 4,
      title: 'Monitoring & Support',
      description: 'Laufende Betreuung und Anpassung der Algorithmen',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-arvo-dark to-arvo-border-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                KI-gestütztes
                <span className="block text-arvo-accent">Recruiting</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionieren Sie Ihren Recruiting-Prozess mit künstlicher Intelligenz. 
                2x schneller, 30% bessere Matches und 90% weniger manuelle Arbeit.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  Kostenlose Demo buchen
                </button>
                <button className="border border-white/30 hover:border-arvo-accent text-white hover:text-arvo-accent font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Mehr erfahren
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-arvo-accent">ab 1.990€</div>
                  <div className="text-gray-400 text-sm">komplett implementiert</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-arvo-accent">4 Wochen</div>
                  <div className="text-gray-400 text-sm">bis zum Go-Live</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/imgs/ai_powered_tech_recruiting_illustration.jpg"
                alt="KI-gestütztes Recruiting"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arvo-dark/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              Warum KI-Recruiting?
            </h2>
            <p className="text-xl text-arvo-text-secondary max-w-3xl mx-auto">
              Traditionelle Recruiting-Prozesse sind zeitaufwändig und fehleranfällig. 
              KI löst diese Probleme elegant und effizient.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-arvo-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-arvo-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-arvo-text-secondary mb-6">
                    {benefit.description}
                  </p>
                  <div className="text-arvo-accent font-semibold text-lg">
                    {benefit.stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-arvo-accent/5 dark:bg-arvo-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              KI-Features im Detail
            </h2>
            <p className="text-xl text-arvo-text-secondary max-w-3xl mx-auto">
              Modernste Technologie trifft auf jahrelange Recruiting-Expertise
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-3xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-arvo-dark dark:text-white mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-arvo-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              Unser Implementierungsprozess
            </h2>
            <p className="text-xl text-arvo-text-secondary max-w-3xl mx-auto">
              In nur 4 Wochen von der Planung zum produktiven KI-Recruiting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-arvo-accent rounded-full flex items-center justify-center text-arvo-dark font-bold">
                  {step.step}
                </div>
                
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-arvo-dark dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <div className="text-arvo-accent font-semibold mb-4">
                    {step.duration}
                  </div>
                  <p className="text-arvo-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-arvo-accent to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Bereit für KI-gestütztes Recruiting?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Starten Sie jetzt mit einer kostenlosen Demo und erleben Sie die Zukunft des Recruitings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-arvo-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <span>Kostenlose Demo buchen</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10">
              Preise anzeigen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRecruitingPage;
