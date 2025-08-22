import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    // Form animation
    gsap.fromTo(
      [form, '.contact-info'],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen bg-arvo-accent flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-20 h-20 text-white mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-4">Vielen Dank!</h2>
          <p className="text-xl text-white/90">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-arvo-accent to-cyan-400 py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            {t.contact.headline}
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300"
                    placeholder="Ihr Vorname"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300"
                    placeholder="Ihr Nachname"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300"
                    placeholder="+49 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  Interesse an
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300"
                >
                  <option value="">Service auswählen...</option>
                  <option value="strategic">Strategische KI-Beratung</option>
                  <option value="recruiting">KI-gestütztes Recruiting</option>
                  <option value="automation">Toolstack & Automatisierung</option>
                  <option value="combo">Kombi-Paket</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 resize-vertical"
                  placeholder="Erzählen Sie uns von Ihren Herausforderungen..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-arvo-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-arvo-accent"></div>
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Nachricht senden</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info space-y-8">
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Kontakt-Informationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm">Telefon</p>
                    <p className="text-white font-semibold">{t.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm">E-Mail</p>
                    <p className="text-white font-semibold">{t.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm">Adresse</p>
                    <p className="text-white font-semibold">{t.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Unsere Garantie</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Antwort innerhalb von 24 Stunden</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Kostenloses 30-minütiges Erstgespräch</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>30 Tage Geld-zurück-Garantie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default ContactSection;
