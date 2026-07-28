import React from 'react';
import { useTranslation } from 'react-i18next';
import './Companies.css';

const Companies = () => {
  const { t } = useTranslation();
  return (
    <section className="awards-section">
      <div className="container awards-container">
        <div className="awards-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('companies.title')}</span>
            </div>
            <h2>{t('companies.heading')}</h2>
          </div>
        </div>

        <div className="awards-right">
          <div className="awards-block">
            <div className="award-card-lg">
              <div className="award-inner">
                <div className="award-icon-lg">
                  <img src="/logo_proz.png" alt="ProZ.com" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} />
                </div>
                <div className="award-info">
                  <h5 className="award-title">{t('companies.c1Title')}</h5>
                  <div className="award-year" style={{ lineHeight: '1.6' }}>
                    {t('companies.c1Desc')}<br />
                    <a href="http://www.proz.com/profile/1448146" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}>{t('companies.viewProfile')}</a>
                  </div>
                </div>
              </div>
            </div>



            <div className="award-card-lg">
              <div className="award-inner">
                <div className="award-icon-lg">
                  <img src="/logo_tc.png" alt="TranslatorsCafe" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} />
                </div>
                <div className="award-info">
                  <h5 className="award-title">{t('companies.c2Title')}</h5>
                  <div className="award-year" style={{ lineHeight: '1.6' }}>
                    {t('companies.c2Desc')}<br />
                    <a href="http://www.translatorscafe.com/cafe/member186128.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}>{t('companies.viewProfile')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;