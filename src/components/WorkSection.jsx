import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './WorkSection.css';

const WorkSection = () => {
  const t = useContent();
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { lists } = useSiteContent();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getLanguageTag = (title) => {
    const match = title.match(/\((.*?)\)$/);
    if (match) {
      return {
        mainTitle: title.replace(/\(.*?\)$/, '').trim(),
        tag: `(${match[1]})`
      };
    }
    return { mainTitle: title, tag: null };
  };

  const nextSlide = () => {
    if (!lists.workItems || lists.workItems.length === 0) return;
    setCurrentIndex((prev) => (prev === lists.workItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!lists.workItems || lists.workItems.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? lists.workItems.length - 1 : prev - 1));
  };

  if (!lists.workItems || lists.workItems.length === 0) return null;

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
          <div className="work-carousel-wrapper">
            
            <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous work">
              <ChevronLeft size={24} />
            </button>

            <div className="work-carousel-track">
              {lists.workItems.map((item, index) => {
                let fullTitle = item.title?.[lang] || item.title?.en || '';
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

                // Calculate position relative to current index
                let position = 'other';
                if (index === currentIndex) position = 'active';
                else if (index === currentIndex - 1 || (currentIndex === 0 && index === lists.workItems.length - 1)) position = 'prev';
                else if (index === currentIndex + 1 || (currentIndex === lists.workItems.length - 1 && index === 0)) position = 'next';

                let transformStyle = 'translateX(0) scale(0.8)';
                let opacityStyle = 0;
                let zIndexStyle = 1;
                let filterStyle = 'blur(4px)';

                if (position === 'active') {
                  transformStyle = 'translateX(0) scale(1)';
                  opacityStyle = 1;
                  zIndexStyle = 10;
                  filterStyle = 'blur(0px)';
                } else if (position === 'prev') {
                  transformStyle = 'translateX(-60%) scale(0.85)';
                  opacityStyle = 0.4;
                  zIndexStyle = 5;
                  filterStyle = 'blur(3px)';
                } else if (position === 'next') {
                  transformStyle = 'translateX(60%) scale(0.85)';
                  opacityStyle = 0.4;
                  zIndexStyle = 5;
                  filterStyle = 'blur(3px)';
                } else {
                  transformStyle = `translateX(${(index - currentIndex) * 100}%) scale(0.8)`;
                  opacityStyle = 0;
                  zIndexStyle = 1;
                  filterStyle = 'blur(4px)';
                }

                return (
                  <div key={item._id} className={`work-carousel-slide ${position}`} style={{ transform: transformStyle, opacity: opacityStyle, zIndex: zIndexStyle, filter: filterStyle, transition: 'all 0.5s ease-in-out' }}>
                    <a href={item.image} className="work-grid-card carousel-card" target="_blank" rel="noopener noreferrer">
                      <div className="work-card-img-wrap">
                        <img src={item.image} alt={mainTitle} className="work-card-img" />
                      </div>
                      <div className="work-card-content">
                        <h5 className="work-card-title">{mainTitle}</h5>
                        {tag && <span className="work-card-tag">{tag}</span>}
                        <span className="work-card-arrow">→</span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next work">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="carousel-dots">
            {lists.workItems.map((_, idx) => (
              <button 
                key={idx} 
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
