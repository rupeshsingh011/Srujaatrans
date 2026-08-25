import React from 'react';
import { useContent } from '../context/SiteContentContext.jsx';
import './Companies.css';

const Companies = () => {
  const t = useContent();
  const logo1 = t('companies.logo1Url') || '/logo_proz.png';
  const logo2 = t('companies.logo2Url') || '/logo_tc.png';
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
                  <img src={logo1} alt="ProZ.com" className="award-logo-img" />
                </div>
                <div className="award-info">
                  <h5 className="award-title">{t('companies.c1Title')}</h5>
                  <div className="award-year">
                    {t('companies.c1Desc')}<br />
                    <a href="http://www.proz.com/profile/1448146" target="_blank" rel="noopener noreferrer" className="award-profile-link">{t('companies.viewProfile')}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="award-card-lg">
              <div className="award-inner">
                <div className="award-icon-lg">
                  <img src={logo2} alt="TranslatorsCafe" className="award-logo-img" />
                </div>
                <div className="award-info">
                  <h5 className="award-title">{t('companies.c2Title')}</h5>
                  <div className="award-year">
                    {t('companies.c2Desc')}<br />
                    <a href="http://www.translatorscafe.com/cafe/member186128.htm" target="_blank" rel="noopener noreferrer" className="award-profile-link">{t('companies.viewProfile')}</a>
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
