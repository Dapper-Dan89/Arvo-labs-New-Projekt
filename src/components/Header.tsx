import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme, useLanguage } from '../contexts/AppContext';
import { translations } from '../data/translations';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: t.nav.home },
    { path: '/leistungen', label: t.nav.services },
    { path: '/ki-recruiting', label: t.nav.aiRecruiting },
    { path: '/ueber-uns', label: t.nav.about },
    { path: '/case-studies', label: t.nav.caseStudies },
    { path: '/kontakt', label: t.nav.contact },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-arvo-dark/80 backdrop-blur-lg border-b border-arvo-border-light/50 dark:border-arvo-border-dark/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-arvo-dark dark:text-white hover:text-arvo-accent transition-colors duration-300"
          >
            Arvo Labs
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-arvo-accent ${
                  location.pathname === item.path
                    ? 'text-arvo-accent border-b-2 border-arvo-accent'
                    : 'text-arvo-dark dark:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-medium text-arvo-dark dark:text-white hover:text-arvo-accent transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-arvo-light/50 dark:bg-arvo-dark/50 text-arvo-dark dark:text-white hover:text-arvo-accent transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-arvo-dark dark:text-white hover:text-arvo-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white/95 dark:bg-arvo-dark/95 backdrop-blur-lg z-40">
          <nav className="px-4 py-8 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-4 text-lg font-medium transition-colors duration-300 border-b border-arvo-border-light/30 dark:border-arvo-border-dark/30 ${
                  location.pathname === item.path
                    ? 'text-arvo-accent'
                    : 'text-arvo-dark dark:text-white hover:text-arvo-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
