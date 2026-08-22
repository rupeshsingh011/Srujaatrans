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
                    <a href="#" className="social-link" aria-label="LinkedIn"><img src="https://cdn.prod.website-files.com/6745a980958c413667256214/6746f7dc2ac0e59b96f217d0_footer-icon-02.svg" alt="LinkedIn" className="social-icon-img" /></a>
                    <a href="https://wa.me/9850994406" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.52 3.44C18.24 1.15 15.18 0 11.96 0 5.4 0 0.05 5.34 0.05 11.9 0.05 13.99 0.6 16.03 1.63 17.84L0 24l6.3-1.65c1.74 0.96 3.69 1.46 5.66 1.46h0.01c6.56 0 11.9-5.35 11.9-11.91 0-3.18-1.24-6.17-3.35-8.46zM11.96 21.82c-1.78 0-3.52-0.48-5.05-1.38l-0.36-0.21-3.75 0.98 1.01-3.66-0.24-0.38C2.58 15.54 2 13.76 2 11.9 2 6.41 6.47 1.95 11.96 1.95c2.66 0 5.16 1.04 7.04 2.92s2.91 4.38 2.91 7.04c-0.01 5.49-4.48 9.91-9.95 9.91zM17.43 14.36c-0.3-0.15-1.77-0.87-2.04-0.97-0.27-0.1-0.47-0.15-0.67 0.15-0.2 0.3-0.77 0.97-0.95 1.17-0.17 0.2-0.35 0.22-0.65 0.07-0.3-0.15-1.26-0.47-2.4-1.48-0.88-0.78-1.48-1.74-1.65-2.04-0.17-0.3-0.02-0.47 0.13-0.62 0.13-0.13 0.3-0.35 0.45-0.52 0.15-0.17 0.2-0.3 0.3-0.5 0.1-0.2 0.05-0.38-0.02-0.52-0.07-0.15-0.67-1.62-0.92-2.22-0.24-0.58-0.49-0.5-0.67-0.51-0.17-0.01-0.37-0.01-0.57-0.01-0.2 0-0.52 0.07-0.79 0.37-0.27 0.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c0.15 0.2 2.1 3.21 5.1 4.5 0.71 0.31 1.27 0.49 1.7 0.63 0.71 0.23 1.36 0.2 1.87 0.12 0.58-0.09 1.77-0.72 2.02-1.42 0.25-0.7 0.25-1.3 0.17-1.42-0.07-0.12-0.27-0.2-0.57-0.35z" fill="#25D366"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="footer-card footer-card-wide">
                  <div className="footer-label">{t('contact.email')}</div>
                  <a href="mailto:jobs@srujaatrans.com" className="footer-link">jobs@srujaatrans.com</a>
                  <p className="footer-desc-text">
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