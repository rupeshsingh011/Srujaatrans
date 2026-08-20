import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        <div className="services-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('services.title')}</span>
            </div>
            <h2>{t('services.heading')}</h2>
          </div>
        </div>

        <div className="services-right">
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></svg>
            </div>
            <div>
              <h5 className="service-title">{t('services.s1Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s1Desc') }}></p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <div>
              <h5 className="service-title">{t('services.s2Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s2Desc') }}></p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2" /><line x1="2" x2="22" y1="20" y2="20" /></svg>
            </div>
            <div>
              <h5 className="service-title">{t('services.s3Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s3Desc') }}></p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 12 12 17 22 12" /><polyline points="2 17 12 22 22 17" /></svg>
            </div>
            <div>
              <h5 className="service-title">{t('services.s4Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s4Desc') }}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;