import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useContent } from '../context/SiteContentContext.jsx';
import './Navbar.css';

const Navbar = () => {
  const { i18n } = useTranslation();
  const t = useContent();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const isContactPage = location.pathname === '/contact-us';

  return (
    <header className={`navbar ${isContactPage ? 'navbar-solid' : ''}`}>
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <nav className="center-nav">
          <Link to="/">{t('nav.home')}</Link>
          <a href="/#about">{t('nav.about')}</a>
          <a href="/#work">{t('nav.work')}</a>
          <a href="/#services">{t('nav.services')}</a>
          <a href="/#experience">{t('nav.experience')}</a>
          <a href="/#skills">{t('nav.skills')}</a>
          <a href="/#reviews">{t('nav.reviews')}</a>
        </nav>
        <div className="nav-right">
          <Link to="/contact-us" className="btn-primary">{t('nav.contact')}</Link>
          <div className="lang-switcher-container">
            <button
              className="lang-switcher-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <img
                src={`https://flagcdn.com/w20/${i18n.language?.startsWith('mr') || i18n.language?.startsWith('hi') ? 'in' : i18n.language?.startsWith('de') ? 'de' : 'us'}.png`}
                alt="Current Language"
                className="lang-flag"
              />
              <span>{(i18n.language || 'en').toUpperCase()}</span>
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className={`lang-chevron ${isLangOpen ? 'open' : ''}`}
              />
            </button>

            {isLangOpen && (
              <div className="lang-dropdown">
                <div
                  className="lang-option"
                  onClick={() => { i18n.changeLanguage('en'); setIsLangOpen(false); }}
                >
                  <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="lang-flag" /> EN
                </div>
                <div
                  className="lang-option"
                  onClick={() => { i18n.changeLanguage('mr'); setIsLangOpen(false); }}
                >
                  <img src="https://flagcdn.com/w20/in.png" alt="Indian Flag" className="lang-flag" /> MR
                </div>
                <div
                  className="lang-option"
                  onClick={() => { i18n.changeLanguage('hi'); setIsLangOpen(false); }}
                >
                  <img src="https://flagcdn.com/w20/in.png" alt="Indian Flag" className="lang-flag" /> HI
                </div>
                <div
                  className="lang-option"
                  onClick={() => { i18n.changeLanguage('de'); setIsLangOpen(false); }}
                >
                  <img src="https://flagcdn.com/w20/de.png" alt="German Flag" className="lang-flag" /> DE
                </div>
              </div>
            )}
          </div>
          <a href="https://wa.me/918505929257" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.52 3.44C18.24 1.15 15.18 0 11.96 0 5.4 0 0.05 5.34 0.05 11.9 0.05 13.99 0.6 16.03 1.63 17.84L0 24l6.3-1.65c1.74 0.96 3.69 1.46 5.66 1.46h0.01c6.56 0 11.9-5.35 11.9-11.91 0-3.18-1.24-6.17-3.35-8.46zM11.96 21.82c-1.78 0-3.52-0.48-5.05-1.38l-0.36-0.21-3.75 0.98 1.01-3.66-0.24-0.38C2.58 15.54 2 13.76 2 11.9 2 6.41 6.47 1.95 11.96 1.95c2.66 0 5.16 1.04 7.04 2.92s2.91 4.38 2.91 7.04c-0.01 5.49-4.48 9.91-9.95 9.91zM17.43 14.36c-0.3-0.15-1.77-0.87-2.04-0.97-0.27-0.1-0.47-0.15-0.67 0.15-0.2 0.3-0.77 0.97-0.95 1.17-0.17 0.2-0.35 0.22-0.65 0.07-0.3-0.15-1.26-0.47-2.4-1.48-0.88-0.78-1.48-1.74-1.65-2.04-0.17-0.3-0.02-0.47 0.13-0.62 0.13-0.13 0.3-0.35 0.45-0.52 0.15-0.17 0.2-0.3 0.3-0.5 0.1-0.2 0.05-0.38-0.02-0.52-0.07-0.15-0.67-1.62-0.92-2.22-0.24-0.58-0.49-0.5-0.67-0.51-0.17-0.01-0.37-0.01-0.57-0.01-0.2 0-0.52 0.07-0.79 0.37-0.27 0.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c0.15 0.2 2.1 3.21 5.1 4.5 0.71 0.31 1.27 0.49 1.7 0.63 0.71 0.23 1.36 0.2 1.87 0.12 0.58-0.09 1.77-0.72 2.02-1.42 0.25-0.7 0.25-1.3 0.17-1.42-0.07-0.12-0.27-0.2-0.57-0.35z" fill="#25D366"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
