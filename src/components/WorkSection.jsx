import React from 'react';
import { useTranslation } from 'react-i18next';
import './WorkSection.css';

const WorkSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section work-section" id="work">
      <div className="container work-container">
        <div className="work-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('work.title')}</span>
            </div>
            <h2>{t('work.heading')}</h2>
          </div>
        </div>

        <div className="work-right">
          <div className="work-strips-list">
            <a href="/100 Great Inspiring Stories by G Francis Xavier_ENG.jpg" className="work-strip-card">
              <span>{t('work.b1')}</span>
              <span className="strip-arrow">→</span>
            </a>
            <a href="/Garma-garam-chivda_MAR.jpg" className="work-strip-card">
              <span>{t('work.b2')}</span>
              <span className="strip-arrow">→</span>
            </a>
            <a href="/Tales of Shakespeare_Charles and Merry Lamb_ENG.png" className="work-strip-card">
              <span>{t('work.b3')}</span>
              <span className="strip-arrow">→</span>
            </a>
            <a href="/Tales of Shakespeare_Charles and Merry Lamb_MAR.png" className="work-strip-card">
              <span>{t('work.b4')}</span>
              <span className="strip-arrow">→</span>
            </a>
            <a href="/The Little Black Book for Stunning Success_ENG.jpg" className="work-strip-card">
              <span>{t('work.b5')}</span>
              <span className="strip-arrow">→</span>
            </a>
            <a href="/The Little Black Book for Stunning Success_MAR.png" className="work-strip-card">
              <span>{t('work.b6')}</span>
              <span className="strip-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;