import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'TechFlow Digital Agency',
      industry: 'Marketing & Advertising',
      size: '25 Mitarbeiter',
      challenge: 'Ineffiziente Admin-Prozesse und hohe Fehlerquote bei Projektmanagement',
      solution: 'Implementierung von KI-gestützten Workflows und automatisierten Reporting-Systemen',
      results: {
        primary: '35% weniger Admin-Zeit',
        secondary: [
          '50% weniger Fehler in Projekten',
          '3x schnellere Reporterstellung',
          'ROI von 280% nach 6 Monaten'
        ]
      },
      testimonial: {
        text: "Arvo Labs hat unsere Arbeitsweise revolutioniert. Wir können uns endlich auf das konzentrieren, was wirklich wichtig ist: unsere Kunden.",
        author: "Sarah Müller",
        position: "CEO, TechFlow Digital"
      },
      image: '/imgs/business_growth_success_tech_illustration_case_study.jpg',
      tags: ['Workflow-Automatisierung', 'KI-Strategieberatung', 'Change Management']
    },
    {
      id: 2,
      company: 'InnoFinance Startup',
      industry: 'Finanzdienstleistungen',
      size: '45 Mitarbeiter',
      challenge: 'Langwierige Recruiting-Prozesse und schlechte Candidate Experience',
      solution: 'KI-basiertes Recruiting-System mit automatisierter Vorauswahl und Candidate Scoring',
      results: {
        primary: '2x schnellere Vorqualifizierung',
        secondary: [
          '60% weniger Time-to-Hire',
          '40% bessere Candidate-Quality',
          '90% Reduktion manueller CV-Screening-Zeit'
        ]
      },
      testimonial: {
        text: "Das KI-Recruiting hat unser HR-Team entlastet und gleichzeitig die Qualität unserer Einstellungen verbessert. Genial!",
        author: "Marcus Weber",
        position: "Head of HR, InnoFinance"
      },
      image: '/imgs/business_growth_success_tech_illustration_rocket_launch.jpg',
      tags: ['KI-Recruiting', 'HR-Automatisierung', 'Candidate Experience']
    },
    {
      id: 3,
      company: 'Handwerk Plus GmbH',
      industry: 'Handwerk & Bau',
      size: '15 Mitarbeiter',
      challenge: 'Papierbasierte Prozesse und ineffiziente Kommunikation zwischen Baustellen',
      solution: 'Digitale Workflow-Optimierung mit mobilen Apps und automatisierten Berichten',
      results: {
        primary: '40% kürzere Durchlaufzeiten',
        secondary: [
          '25% mehr Umsatz durch Effizienz',
          '30% höhere Kundenzufriedenheit',
          '70% weniger Papierkram'
        ]
      },
      testimonial: {
        text: "Von analog zu digital in nur 8 Wochen. Die Investition hat sich bereits nach 4 Monaten amortisiert.",
        author: "Klaus Zimmermann",
        position: "Geschäftsführer, Handwerk Plus"
      },
      image: '/imgs/tech_consulting_it_strategy_planning_diagram.jpg',
      tags: ['Digitalisierung', 'Mobile Solutions', 'Workflow-Optimierung']
    },
    {
      id: 4,
      company: 'EcoTech Solutions',
      industry: 'Cleantech & Nachhaltigkeit',
      size: '35 Mitarbeiter',
      challenge: 'Komplexe Datenanalyse und ineffiziente Entscheidungsfindung',
      solution: 'KI-Dashboard für Datenanalyse und automatisierte Insights-Generierung',
      results: {
        primary: '55% schnellere Entscheidungen',
        secondary: [
          '30% bessere Vorhersagegenauigkeit',
          '2x mehr Daten-Insights pro Tag',
          '45% Reduktion der Analysezeit'
        ]
      },
      testimonial: {
        text: "Die KI-Dashboards geben uns Einblicke, die wir vorher nie hatten. Unsere Entscheidungen sind jetzt datengetrieben und präziser.",
        author: "Dr. Lisa Chen",
        position: "CTO, EcoTech Solutions"
      },
      image: '/imgs/ai_consulting_data_analysis_tech_illustration.jpg',
      tags: ['Data Analytics', 'KI-Dashboards', 'Business Intelligence']
    },
    {
      id: 5,
      company: 'RetailFlow E-Commerce',
      industry: 'E-Commerce & Retail',
      size: '60 Mitarbeiter',
      challenge: 'Ineffiziente Lagerlogistik und manuelle Kundenbetreuung',
      solution: 'KI-gestützte Lagerverwaltung und Chatbot-Integration für Kundenservice',
      results: {
        primary: '45% weniger Lagerkosten',
        secondary: [
          '80% automatisierte Kundenanfragen',
          '35% schnellere Lieferzeiten',
          '25% höhere Kundenzufriedenheit'
        ]
      },
      testimonial: {
        text: "Der KI-Chatbot beantwortet 80% unserer Kundenanfragen automatisch. Unser Team kann sich auf komplexe Fälle konzentrieren.",
        author: "Anna Hartmann",
        position: "Operations Manager, RetailFlow"
      },
      image: '/imgs/modern_business_workflow_automation_tech_illustration.jpg',
      tags: ['E-Commerce', 'Lagerverwaltung', 'Customer Service']
    },
    {
      id: 6,
      company: 'HealthTech Innovations',
      industry: 'Healthcare & MedTech',
      size: '40 Mitarbeiter',
      challenge: 'Langwierige Patientenverwaltung und ineffiziente Terminplanung',
      solution: 'KI-System für intelligente Terminplanung und automatisierte Patientenkommunikation',
      results: {
        primary: '50% weniger Admin-Zeit',
        secondary: [
          '90% weniger No-Shows',
          '2x mehr Termine pro Tag möglich',
          '40% höhere Patientenzufriedenheit'
        ]
      },
      testimonial: {
        text: "Die KI-Terminplanung hat unser Praxismanagement revolutioniert. Mehr Zeit für Patienten, weniger Papierkram.",
        author: "Dr. Michael Braun",
        position: "Praxisinhaber, HealthTech Innovations"
      },
      image: '/imgs/professional_tech_consulting_interface.jpg',
      tags: ['Healthcare', 'Terminplanung', 'Patientenmanagement']
    }
  ];

  const industries = [
    'Alle Branchen',
    'Marketing & Advertising',
    'Finanzdienstleistungen',
    'Handwerk & Bau',
    'Cleantech & Nachhaltigkeit',
    'E-Commerce & Retail',
    'Healthcare & MedTech'
  ];

  const [selectedIndustry, setSelectedIndustry] = React.useState('Alle Branchen');

  const filteredCaseStudies = selectedIndustry === 'Alle Branchen' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-arvo-dark to-arvo-border-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Erfolgs
              <span className="block text-arvo-accent">geschichten</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Erfahren Sie, wie unsere Kunden mit KI-Implementierungen messbare Erfolge erzielen. 
              Echte Projekte, konkrete Ergebnisse, nachprüfbare ROI.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-arvo-accent mb-2">150+</div>
                <div className="text-gray-400">Erfolgreiche Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-arvo-accent mb-2">38%</div>
                <div className="text-gray-400">Ø Effizienzsteigerung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-arvo-accent mb-2">280%</div>
                <div className="text-gray-400">Durchschnittlicher ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-arvo-border-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-arvo-accent text-arvo-dark shadow-lg'
                    : 'bg-arvo-light dark:bg-arvo-border-dark text-arvo-text-secondary hover:bg-arvo-accent/10 hover:text-arvo-accent'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-arvo-accent/20 backdrop-blur-sm"
              >
                {/* Case Study Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.company}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arvo-dark/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-arvo-accent/90 text-arvo-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {caseStudy.industry}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{caseStudy.size}</div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-8">
                  {/* Company */}
                  <h3 className="text-2xl font-bold text-arvo-dark dark:text-white mb-2">
                    {caseStudy.company}
                  </h3>
                  
                  {/* Primary Result */}
                  <div className="text-xl font-semibold text-arvo-accent mb-6">
                    {caseStudy.results.primary}
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-arvo-dark dark:text-white mb-2">
                      Herausforderung:
                    </h4>
                    <p className="text-arvo-text-secondary text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-arvo-dark dark:text-white mb-2">
                      Lösung:
                    </h4>
                    <p className="text-arvo-text-secondary text-sm leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-arvo-dark dark:text-white mb-3">
                      Weitere Ergebnisse:
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.results.secondary.map((result, index) => (
                        <li key={index} className="text-arvo-text-secondary text-sm flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-arvo-accent rounded-full"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-arvo-accent/5 rounded-2xl p-6 mb-6">
                    <p className="text-arvo-text-secondary italic mb-4 leading-relaxed">
                      "{caseStudy.testimonial.text}"
                    </p>
                    <div className="font-semibold text-arvo-dark dark:text-white">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-sm text-arvo-text-secondary">
                      {caseStudy.testimonial.position}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-arvo-accent/10 text-arvo-accent px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-arvo-accent/25 flex items-center justify-center space-x-2">
                    <span>Ähnliches Projekt anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
            Ihr Erfolg ist der nächste
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Lassen Sie uns gemeinsam Ihre KI-Erfolgsgeschichte schreiben. 
            Starten Sie mit einem kostenlosen Beratungsgespräch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-arvo-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <span>Kostenlose Beratung buchen</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10 flex items-center space-x-2">
              <span>Detaillierten Case Study anfordern</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
