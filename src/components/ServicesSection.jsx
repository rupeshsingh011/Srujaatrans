import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, BookOpenCheck, Captions, Globe } from 'lucide-react';
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
              <Languages size={28} strokeWidth={2} />
            </div>
            <div>
              <h5 className="service-title">{t('services.s1Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s1Desc') }}></p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <BookOpenCheck size={28} strokeWidth={2} />
            </div>
            <div>
              <h5 className="service-title">{t('services.s2Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s2Desc') }}></p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Captions size={28} strokeWidth={2} />
            </div>
            <div>
              <h5 className="service-title">{t('services.s3Title')}</h5>
              <p dangerouslySetInnerHTML={{ __html: t('services.s3Desc') }}></p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Globe size={28} strokeWidth={2} />
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