import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  const team = [
    {
      name: 'Alex Müller',
      role: 'CEO & KI-Strategist',
      image: '/imgs/startup-team-collaboration-tech-illustration.jpg',
      bio: '8+ Jahre Erfahrung in KI-Implementierung für KMU. Experte für strategische Digitalisierung.',
      expertise: ['KI-Strategie', 'Business Development', 'Change Management']
    },
    {
      name: 'Sarah Schmidt',
      role: 'Head of AI Engineering',
      image: '/imgs/startup_team_online_collaboration_illustration.jpg',
      bio: 'Tech-Lead mit Fokus auf praxisnahe KI-Lösungen. Spezialistin für Recruiting-Algorithmen.',
      expertise: ['Machine Learning', 'Recruiting Tech', 'Process Automation']
    },
    {
      name: 'Marcus Weber',
      role: 'Consulting Lead',
      image: '/imgs/professional_tech_consulting_interface.jpg',
      bio: '12+ Jahre Beratungserfahrung. Experte für Geschäftsprozess-Optimierung in KMU.',
      expertise: ['Business Consulting', 'Workflow Design', 'Team Training']
    }
  ];

  const values = [
    {
      title: 'Praxisnah',
      description: 'Keine theoretischen Konzepte - nur Lösungen, die wirklich funktionieren',
      icon: '🎯'
    },
    {
      title: 'Transparent',
      description: 'Klare Kommunikation, messbare Erfolge und faire Preisgestaltung',
      icon: '🔍'
    },
    {
      title: 'Nachhaltig',
      description: 'Langfristige Partnerschaften statt einmaliger Projekte',
      icon: '🌱'
    },
    {
      title: 'Innovativ',
      description: 'Immer am Puls der Zeit mit den neuesten KI-Technologien',
      icon: '🚀'
    }
  ];

  const stats = [
    { value: '150+', label: 'Erfolgreiche Projekte' },
    { value: '89%', label: 'Kundenzufriedenheit' },
    { value: '3 Jahre', label: 'Durchschn. Kundenbeziehung' },
    { value: '24h', label: 'Response-Zeit' }
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Gründung von Arvo Labs',
      description: 'Start als KI-Beratung mit Fokus auf KMU und Startups'
    },
    {
      year: '2022',
      title: 'Erste 50 Kunden',
      description: 'Erfolgreiche Implementierung von KI-Lösungen in verschiedenen Branchen'
    },
    {
      year: '2023',
      title: 'Expansion der Services',
      description: 'Einführung von KI-Recruiting und Workflow-Automatisierung'
    },
    {
      year: '2024',
      title: 'Scale-up Phase',
      description: 'Über 150 erfolgreiche Projekte und kontinuierliches Wachstum'
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
                Über
                <span className="block text-arvo-accent">Arvo Labs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Wir sind ein Team von KI-Experten und Business-Beratern mit einer Mission: 
                KI für jeden zugänglich und nutzbar zu machen.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-arvo-accent mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="/imgs/startup-team-collaboration-tech-illustration.jpg"
                alt="Arvo Labs Team"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arvo-dark/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-8">
            Unsere Mission
          </h2>
          <p className="text-2xl text-arvo-text-secondary leading-relaxed mb-12">
            "KI soll kein Luxus für Großkonzerne sein, sondern ein praktisches Werkzeug 
            für jedes Unternehmen, das effizienter arbeiten möchte."
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-arvo-accent mb-2">{stat.value}</div>
                <div className="text-arvo-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-arvo-accent/5 dark:bg-arvo-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-arvo-text-secondary max-w-3xl mx-auto">
              Diese Prinzipien leiten unser tägliches Handeln und unsere Entscheidungen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-arvo-dark dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-arvo-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              Unser Team
            </h2>
            <p className="text-xl text-arvo-text-secondary max-w-3xl mx-auto">
              Erfahrene Experten mit einer gemeinsamen Vision für die Zukunft der Arbeit
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-arvo-dark dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-arvo-accent font-semibold mb-4">
                    {member.role}
                  </div>
                  <p className="text-arvo-text-secondary mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-arvo-accent/10 text-arvo-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-arvo-accent/5 dark:bg-arvo-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              Unsere Geschichte
            </h2>
            <p className="text-xl text-arvo-text-secondary">
              Von der Gründung bis heute - unser Weg zu KI-Excellence
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-arvo-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-arvo-accent">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-arvo-dark dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-arvo-text-secondary leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-8">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl text-arvo-text-secondary mb-12">
            Haben Sie Fragen zu unserem Team oder unserem Ansatz? 
            Wir freuen uns auf ein persönliches Gespräch.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-arvo-accent" />
              <span className="text-arvo-text-secondary">info@arvolabs.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-arvo-accent" />
              <span className="text-arvo-text-secondary">+49 (0) 123 456 789</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-arvo-accent" />
              <span className="text-arvo-text-secondary">Berlin, Deutschland</span>
            </div>
          </div>

          <button className="bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-arvo-accent/25 flex items-center space-x-2 mx-auto">
            <Calendar className="w-5 h-5" />
            <span>Persönliches Gespräch buchen</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
