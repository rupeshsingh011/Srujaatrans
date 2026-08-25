import React from 'react';
import { useTranslation } from 'react-i18next';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './WorkSection.css';

const WorkSection = () => {
  const t = useContent();
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { lists } = useSiteContent();

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
            {lists.workItems.map((item) => (
              <a key={item._id} href={item.image} className="work-strip-card" target="_blank" rel="noopener noreferrer">
                <span>{item.title?.[lang] || item.title?.en || ''}</span>
                <span className="strip-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
