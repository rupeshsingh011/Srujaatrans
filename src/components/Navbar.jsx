import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
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
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/contact-us" className="btn-primary">{t('nav.contact')}</Link>
          <div className="lang-switcher-container" style={{ position: 'relative' }}>
            <button 
              className="lang-switcher-btn" 
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'transparent', border: '1px solid #eaeaea', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' }}
            >
              <img 
                src={`https://flagcdn.com/w20/${i18n.language?.startsWith('mr') ? 'in' : i18n.language?.startsWith('de') ? 'de' : 'us'}.png`} 
                alt="Current Language" 
                style={{ width: '20px', borderRadius: '2px' }} 
              />
              <span>{(i18n.language || 'en').toUpperCase()}</span>
            </button>
            
            {isLangOpen && (
              <div className="lang-dropdown" style={{ position: 'absolute', top: '100%', right: '0', marginTop: '8px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden', minWidth: '100px', zIndex: 1001 }}>
                <div 
                  className="lang-option" 
                  onClick={() => { i18n.changeLanguage('en'); setIsLangOpen(false); }}
                  style={{ padding: '10px 15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', borderBottom: '1px solid #f5f5f5' }}
                >
                  <img src="https://flagcdn.com/w20/us.png" alt="US Flag" style={{ width: '20px', borderRadius: '2px' }} /> EN
                </div>
                <div 
                  className="lang-option" 
                  onClick={() => { i18n.changeLanguage('mr'); setIsLangOpen(false); }}
                  style={{ padding: '10px 15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', borderBottom: '1px solid #f5f5f5' }}
                >
                  <img src="https://flagcdn.com/w20/in.png" alt="Indian Flag" style={{ width: '20px', borderRadius: '2px' }} /> MR
                </div>
                <div 
                  className="lang-option" 
                  onClick={() => { i18n.changeLanguage('de'); setIsLangOpen(false); }}
                  style={{ padding: '10px 15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}
                >
                  <img src="https://flagcdn.com/w20/de.png" alt="German Flag" style={{ width: '20px', borderRadius: '2px' }} /> DE
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
