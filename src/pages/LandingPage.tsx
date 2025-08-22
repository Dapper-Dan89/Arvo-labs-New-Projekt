import React from 'react';
import { ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    'Kostenlose IST-Analyse im Wert von 990€',
    'Individuelle KI-Roadmap für Ihr Unternehmen',
    'Konkrete Tool-Empfehlungen und Budget-Planung',
    '30 Tage Geld-zurück-Garantie',
    'Direkter Draht zu unseren KI-Experten'
  ];

  const testimonials = [
    {
      text: "Die 35% Zeitersparnis haben wir bereits im ersten Monat erreicht. Fantastisch!",
      author: "Sarah M., CEO Digital Agency"
    },
    {
      text: "Unser Recruiting ist jetzt 2x schneller und die Candidates sind viel besser geeignet.",
      author: "Marcus W., Head of HR"
    }
  ];

  const [timeLeft, setTimeLeft] = React.useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-arvo-dark to-arvo-border-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Limited Time Banner */}
          <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 mb-8 backdrop-blur-sm">
            <div className="text-red-300 font-semibold mb-2">⚡ LIMITIERTES ANGEBOT</div>
            <div className="text-white text-xl font-bold">
              30% Rabatt auf alle KI-Services - Nur noch wenige Plätze verfügbar!
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Revolutionieren Sie Ihr Business
            <span className="block text-arvo-accent">mit KI</span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            Sparen Sie 35% Zeit, reduzieren Sie 50% der Fehler und steigern Sie 
            Ihre Effizienz um durchschnittlich 38% - in nur 12 Wochen.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 rounded-3xl p-6 mb-12 backdrop-blur-sm">
            <div className="text-arvo-accent font-semibold mb-4">Angebot läuft ab in:</div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Tage', value: timeLeft.days },
                { label: 'Stunden', value: timeLeft.hours },
                { label: 'Minuten', value: timeLeft.minutes },
                { label: 'Sekunden', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-arvo-accent">{item.value.toString().padStart(2, '0')}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-arvo-accent/20 to-green-500/20 rounded-3xl p-8 mb-12 backdrop-blur-sm border border-arvo-accent/30">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <div className="text-2xl font-bold">SONDER-PAKET</div>
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-4">
              <span className="text-4xl font-bold text-arvo-accent">3.213€</span>
              <span className="text-2xl text-gray-400 line-through">4.590€</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">-30%</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-6">
              Komplettes KI-Transformation-Paket mit persönlichem Success Manager
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-left">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-arvo-accent hover:bg-arvo-accent/90 text-arvo-dark font-bold py-5 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-arvo-accent/25 flex items-center justify-center space-x-2">
              <span>JETZT 30% SPAREN - Beratung buchen</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="text-gray-400 mb-4">Vertrauen von 150+ Unternehmen</div>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="text-2xl font-bold">150+</div>
              <div>Projekte</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">89%</div>
              <div>Zufriedenheit</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold">4.8/5</div>
              <div>Bewertung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-4">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-arvo-accent/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-arvo-text-secondary italic mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-arvo-dark dark:text-white">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 to-arvo-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-arvo-border-dark/50 rounded-3xl p-12 backdrop-blur-sm">
            <Clock className="w-16 h-16 text-arvo-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-arvo-dark dark:text-white mb-6">
              Warum Sie JETZT handeln sollten
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-red-500 font-bold text-lg mb-2">Ohne KI verlieren Sie täglich:</div>
                <div className="text-arvo-text-secondary">• 3.2h pro Mitarbeiter durch ineffiziente Prozesse</div>
                <div className="text-arvo-text-secondary">• Potenzielle Top-Kandidaten an die Konkurrenz</div>
                <div className="text-arvo-text-secondary">• Wettbewerbsvorteile durch verpasste Digitalisierung</div>
              </div>
              <div>
                <div className="text-arvo-accent font-bold text-lg mb-2">Mit KI gewinnen Sie sofort:</div>
                <div className="text-arvo-text-secondary">• 35% mehr Zeit für wichtige Aufgaben</div>
                <div className="text-arvo-text-secondary">• 2x schnellere und bessere Entscheidungen</div>
                <div className="text-arvo-text-secondary">• Nachhaltigen Wettbewerbsvorteil</div>
              </div>
              <div>
                <div className="text-green-500 font-bold text-lg mb-2">Ihr ROI nach 6 Monaten:</div>
                <div className="text-arvo-text-secondary">• 280% durchschnittliche Rendite</div>
                <div className="text-arvo-text-secondary">• Amortisation bereits nach 4 Monaten</div>
                <div className="text-arvo-text-secondary">• Langfristige Kostenvorteile</div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-arvo-accent to-green-500 rounded-2xl p-6 text-white">
              <div className="text-2xl font-bold mb-4">
                🔥 Letzter Aufruf: Nur noch 5 Plätze verfügbar!
              </div>
              <button className="bg-white text-arvo-dark font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                PLATZ SICHERN - 30% Rabatt aktivieren
              </button>
              <div className="text-sm mt-4 opacity-90">
                ✓ 30 Tage Geld-zurück-Garantie ✓ Kostenlose Erstberatung ✓ Sofortiger Start möglich
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-12 bg-arvo-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">100% DSGVO-konform</div>
              <div className="text-gray-400 text-sm">Alle Daten bleiben in Deutschland</div>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">30 Tage Geld-zurück</div>
              <div className="text-gray-400 text-sm">Ohne Wenn und Aber</div>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">Persönlicher Support</div>
              <div className="text-gray-400 text-sm">Antwort binnen 24h</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
