import React from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <section className="experience-section" id="experience">
      <div className="container experience-container">
        <div className="experience-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('experience.title')}</span>
            </div>
            <h2>{t('experience.heading')}</h2>
          </div>
        </div>

        <div className="experience-right">
          <div className="experience-block">
            <div className="experience-card first">
              <div className="experience-history">
                <h5 className="exp-title">{t('experience.domainsTitle')}</h5>
                <p className="exp-desc">
                  {t('experience.domainsDesc')}
                </p>
              </div>
            </div>

            <div className="experience-card square-card">
              <div className="experience-history">
                <h5 className="exp-title">{t('experience.languagesTitle')}</h5>
                <ul className="exp-desc" style={{ paddingLeft: '20px', margin: '0', textAlign: 'left' }}>
                  <li>{t('experience.lang1')}</li>
                  <li>{t('experience.lang2')}</li>
                  <li>{t('experience.lang3')}</li>
                  <li>{t('experience.lang4')}</li>
                  <li>{t('experience.lang5')}</li>
                </ul>
              </div>
            </div>

            <div className="experience-card square-card">
              <div className="experience-history">
                <h5 className="exp-title">{t('experience.educationTitle')}</h5>
                <ul className="exp-desc" style={{ paddingLeft: '20px', margin: '0', textAlign: 'left' }}>
                  <li>{t('experience.edu1')}</li>
                  <li>{t('experience.edu2')}</li>
                  <li>{t('experience.edu3')}</li>
                  <li>{t('experience.edu4')}</li>
                  <li>{t('experience.edu5')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;