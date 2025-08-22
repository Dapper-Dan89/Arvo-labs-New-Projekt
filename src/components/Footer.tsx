import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/leistungen', label: t.nav.services },
    { path: '/ueber-uns', label: t.nav.about },
    { path: '/kontakt', label: t.nav.contact },
  ];

  const services = [
    { path: '/leistungen', label: 'Strategische KI-Beratung' },
    { path: '/ki-recruiting', label: 'KI-Recruiting' },
    { path: '/leistungen', label: 'Toolstack & Automatisierung' },
    { path: '/case-studies', label: 'Case Studies' },
  ];

  const legal = [
    { path: '/datenschutz', label: 'Datenschutz' },
    { path: '/impressum', label: 'Impressum' },
    { path: '/agb', label: 'AGB' },
  ];

  return (
    <footer className="bg-arvo-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold text-arvo-accent mb-4 block">
              Arvo Labs
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-arvo-accent" />
                <span className="text-gray-300">{t.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-arvo-accent" />
                <span className="text-gray-300">{t.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-arvo-accent" />
                <span className="text-gray-300">{t.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-arvo-accent transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-arvo-accent transition-colors duration-300 flex items-center group"
                  >
                    <span>{service.label}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-arvo-border-dark pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              {t.footer.copyright}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-arvo-accent text-sm transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Made by */}
            <div className="text-gray-400 text-sm">
              {t.footer.madeBy} <span className="text-arvo-accent font-semibold">MiniMax Agent</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
