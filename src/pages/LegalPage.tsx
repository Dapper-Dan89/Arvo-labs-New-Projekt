import React from 'react';
import { useParams } from 'react-router-dom';

interface LegalPageProps {
  type?: 'privacy' | 'imprint' | 'terms';
}

const LegalPage: React.FC<LegalPageProps> = ({ type = 'privacy' }) => {
  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold text-arvo-dark dark:text-white mb-8">
              Datenschutzerklärung
            </h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-xl font-semibold text-arvo-dark dark:text-white mb-3">
                Allgemeine Hinweise
              </h3>
              <p className="text-arvo-text-secondary mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="text-xl font-semibold text-arvo-dark dark:text-white mb-3">
                Datenschutz
              </h3>
              <p className="text-arvo-text-secondary mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                3. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-xl font-semibold text-arvo-dark dark:text-white mb-3">
                Kontaktformular
              </h3>
              <p className="text-arvo-text-secondary mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                4. Kontakt
              </h2>
              <p className="text-arvo-text-secondary">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei 
                Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <div className="mt-4 p-4 bg-arvo-light dark:bg-arvo-border-dark rounded-lg">
                <p className="text-arvo-text-secondary">
                  <strong>Arvo Labs</strong><br />
                  E-Mail: info@arvolabs.com<br />
                  Telefon: +49 (0) 123 456 789
                </p>
              </div>
            </section>
          </div>
        );

      case 'imprint':
        return (
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold text-arvo-dark dark:text-white mb-8">
              Impressum
            </h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="p-4 bg-arvo-light dark:bg-arvo-border-dark rounded-lg">
                <p className="text-arvo-text-secondary">
                  <strong>Arvo Labs</strong><br />
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                Kontakt
              </h2>
              <div className="p-4 bg-arvo-light dark:bg-arvo-border-dark rounded-lg">
                <p className="text-arvo-text-secondary">
                  <strong>Telefon:</strong> +49 (0) 123 456 789<br />
                  <strong>E-Mail:</strong> info@arvolabs.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-arvo-text-secondary">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="p-4 bg-arvo-light dark:bg-arvo-border-dark rounded-lg">
                <p className="text-arvo-text-secondary">
                  Alex Müller<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
              </div>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold text-arvo-dark dark:text-white mb-8">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                1. Geltungsbereich
              </h2>
              <p className="text-arvo-text-secondary mb-4">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Beratungsleistungen der Arvo Labs 
                gegenüber Unternehmen im Bereich KI-Implementierung und Geschäftsprozess-Optimierung.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                2. Vertragsschluss
              </h2>
              <p className="text-arvo-text-secondary mb-4">
                Der Vertrag kommt durch schriftliche Bestätigung unseres Angebots durch den Kunden zustande. 
                Alle Angebote sind freibleibend und unverbindlich.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                3. Leistungsumfang
              </h2>
              <p className="text-arvo-text-secondary mb-4">
                Der Umfang unserer Beratungsleistungen ergibt sich aus der jeweiligen Leistungsbeschreibung 
                und dem Angebot. Änderungen bedürfen der schriftlichen Vereinbarung.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                4. Vergütung und Zahlungsbedingungen
              </h2>
              <p className="text-arvo-text-secondary mb-4">
                Die Vergütung richtet sich nach dem vereinbarten Festpreis oder Stundensatz. 
                Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-arvo-dark dark:text-white mb-4">
                5. Geld-zurück-Garantie
              </h2>
              <p className="text-arvo-text-secondary mb-4">
                Wir gewähren auf unsere Beratungsleistungen eine 30-tägige Geld-zurück-Garantie. 
                Bei Nichtgefallen können Sie innerhalb von 30 Tagen nach Projektstart vom Vertrag zurücktreten.
              </p>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-arvo-light dark:bg-arvo-dark">
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
          
          <div className="mt-12 p-6 bg-arvo-accent/10 rounded-3xl">
            <p className="text-arvo-text-secondary text-center">
              <strong>Stand:</strong> August 2024<br />
              Bei Fragen zu diesen Bestimmungen kontaktieren Sie uns gerne unter{' '}
              <a href="mailto:info@arvolabs.com" className="text-arvo-accent hover:underline">
                info@arvolabs.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
