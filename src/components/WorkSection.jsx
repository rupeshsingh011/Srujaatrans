import React from 'react';
import { useTranslation } from 'react-i18next';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './WorkSection.css';

const WorkSection = () => {
  const t = useContent();
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { lists } = useSiteContent();

  const getLanguageTag = (title) => {
    const match = title.match(/\((.*?)\)$/);
    if (match) {
      return {
        mainTitle: title.replace(/\(.*?\)$/, '').trim(),
        tag: `(${match[1]})`
      };
    }
    // Fallback if no parenthesis is found, though we'll assume there is based on data
    // The previous implementation used _ENG or _MAR in filename if title is missing, 
    // but the DB has (ENG) in title. We just return as is if no match.
    return { mainTitle: title, tag: null };
  };

  return (
    <section className="section work-section" id="work">
      <div className="container work-container">
        <div className="work-left">
          <div className="work-pill-outer">
            <span className="work-pill">• WORK</span>
          </div>
          <div className="section-title">
            <h2 className="work-heading">From<br/>My Desk</h2>
          </div>
        </div>

        <div className="work-right">
          <div className="work-grid">
            {lists.workItems.map((item) => {
              let fullTitle = item.title?.[lang] || item.title?.en || '';
              // The titles might not actually have (ENG) in them if they just used the JSON keys.
              // We'll extract from image filename if title doesn't have it.
              let tag = null;
              let mainTitle = fullTitle;
              
              if (fullTitle.includes('(')) {
                const parsed = getLanguageTag(fullTitle);
                mainTitle = parsed.mainTitle;
                tag = parsed.tag;
              } else if (item.image) {
                if (item.image.includes('_ENG')) tag = '(ENG)';
                else if (item.image.includes('_MAR')) tag = '(MAR)';
                else if (item.image.includes('_HI')) tag = '(HI)';
                else if (item.image.includes('_DE')) tag = '(DE)';
              }

              return (
                <a key={item._id} href={item.image} className="work-grid-card" target="_blank" rel="noopener noreferrer">
                  <div className="work-card-img-wrap">
                    <img src={item.image} alt={mainTitle} className="work-card-img" />
                  </div>
                  <div className="work-card-content">
                    <h5 className="work-card-title">{mainTitle}</h5>
                    {tag && <span className="work-card-tag">{tag}</span>}
                    <span className="work-card-arrow">→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
