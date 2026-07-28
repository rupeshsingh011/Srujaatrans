import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('about.title')}</span>
            </div>
            <h2>{t('about.heading')}</h2>
          </div>
        </div>

        <div className="about-right">
          <div className="about-top">
            <h4>{t('about.subHeading')}</h4>
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>
          <div className="button-wrap">
            <a href="/Mugdha_Resume.pdf" download="Mugdha_Resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">{t('about.downloadResume')}</a>
            <a href="/BCV_Mugdha%20Ghate_V25.pdf" download="BCV_Mugdha_Ghate_V25.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">{t('about.downloadCV')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;