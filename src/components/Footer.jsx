import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-wrap">
          <div className="footer-left">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="srujaalogo" />
            </Link>
          </div>

          <div className="footer-right">
            <div className="footer-top">
              <h4 className="footer-title">{t('footer.title')}</h4>
              <Link to="/contact-us" className="btn-primary">{t('footer.contactUsButton')}</Link>
            </div>

            <div className="footer-middle">
              <div className="footer-contact-outer">
                <div className="footer-card">
                  <div className="footer-label">{t('footer.heading')}</div>
                  <a href="tel:+919850994406" className="footer-link">+91 9850994406</a>
                </div>

                <div className="footer-card">
                  <div className="footer-label">{t('contact.followUs')}</div>
                  <div className="social-wrap">
                    <a href="#" className="social-link"><img src="https://cdn.prod.website-files.com/6745a980958c413667256214/6746f7dc2ac0e59b96f217d0_footer-icon-02.svg" alt="LinkedIn" /></a>
                    <a href="https://wa.me/9850994406" className="social-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="footer-card" style={{ flex: '1 1 100%' }}>
                  <div className="footer-label">{t('contact.email')}</div>
                  <a href="mailto:jobs@srujaatrans.com" className="footer-link">jobs@srujaatrans.com</a>
                  <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                    {t('footer.desc')}
                  </p>
                </div>
              </div>

              <div className="footer-info">
                <div className="footer-image">
                  <img src="/MG-1.png" alt="Profile" className="cover-image" />
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                <div>{t('footer.copyright')}</div>
                <div>{t('footer.workBy')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;