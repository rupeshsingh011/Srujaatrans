import React from 'react';
import { useTranslation } from 'react-i18next';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import { motion } from 'framer-motion';
import './ExperienceSection.css';

const fallbackImages = {
  '100 Great Inspiring Stories by G Francis Xavier': '/100 Great Inspiring Stories by G Francis Xavier_ENG.jpg',
  'Garma-garam-chivda': '/Garma-garam-chivda_MAR.jpg',
  'Tales of Shakespeare: Charles and Merry Lamb': '/Tales of Shakespeare_Charles and Merry Lamb_ENG.png',
  'The Little Black Book for Stunning Success': '/The Little Black Book for Stunning Success_ENG.jpg'
};

const ExperienceSection = () => {
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
    return { mainTitle: title, tag: null };
  };

  if (!lists.workItems || lists.workItems.length === 0) return null;

  return (
    <section className="section work-section" id="experience">
      <div className="container work-container-grid">
        
        <div className="section-title work-title-minimal">
          <h2>{t('work.title')}</h2>
          <div className="header-underline" style={{ margin: '15px auto 0' }}></div>
        </div>

        <div className="work-grid">
          {lists.workItems.map((item, index) => {
            let fullTitle = item.title?.[lang] || item.title?.en || '';
            let enTitle = item.title?.en || fullTitle;
            let tag = null;
            let mainTitle = fullTitle;
            let enMainTitle = enTitle;
            
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

            if (enTitle.includes('(')) {
              enMainTitle = getLanguageTag(enTitle).mainTitle;
            }

            const imageSrc = item.image || fallbackImages[enMainTitle] || fallbackImages[mainTitle];
            const fallbackSrc = fallbackImages[enMainTitle] || fallbackImages[mainTitle];

            // Determine if the row is an even row (0-indexed) for desktop zig-zag
            const rowIndex = Math.floor(index / 3);
            const isReverse = rowIndex % 2 === 1;
            const fromRight = isReverse;

            let hoverImage = null;
            if (enTitle.includes('The Little Black Book for Stunning Success') && enTitle.includes('MAR')) {
              hoverImage = '/The Little Black Book for Stunning Success - cover page in marathi.webp';
            } else if (enTitle.includes('Tales of Shakespeare') && enTitle.includes('MAR')) {
              hoverImage = '/tales-from-shakespeare-marathi-charles-and-mary-lamb-marathi.jpg';
            }

            return (
              <motion.a 
                key={item._id}
                href={item.image || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`work-grid-item ${isReverse ? 'reverse' : ''}`}
                initial={{ opacity: 0, x: fromRight ? 100 : -100, rotateY: fromRight ? -30 : 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: -5, 
                  z: 20, 
                  transition: { duration: 0.1, type: "tween", ease: "easeOut" } 
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: index * 0.15 }}
              >
                <div className="work-item-image-wrapper">
                  {hoverImage ? (
                    <div className="flip-inner has-flip">
                      <div className="flip-front">
                        <img 
                          src={imageSrc} 
                          alt={mainTitle} 
                          className="work-item-image" 
                          loading="lazy"
                          onError={(e) => {
                            if (fallbackSrc && !e.target.src.endsWith(fallbackSrc)) {
                              e.target.src = fallbackSrc;
                            } else {
                              e.target.style.display = 'none';
                            }
                          }}
                        />
                      </div>
                      <div className="flip-back">
                        <img 
                          src={hoverImage} 
                          alt={`${mainTitle} Hover`} 
                          className="work-item-image" 
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : imageSrc ? (
                    <img 
                      src={imageSrc} 
                      alt={mainTitle} 
                      className="work-item-image" 
                      loading="lazy"
                      onError={(e) => {
                        if (fallbackSrc && !e.target.src.endsWith(fallbackSrc)) {
                          e.target.src = fallbackSrc;
                        } else {
                          e.target.style.display = 'none';
                        }
                      }}
                    />
                  ) : (
                    <div className="work-item-image-placeholder"></div>
                  )}
                </div>
                
                <div className="work-item-text-wrapper">
                  <h3 className="work-item-title">{mainTitle}</h3>
                  {tag && <span className="work-item-tag">{tag}</span>}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
