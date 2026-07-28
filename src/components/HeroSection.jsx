import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Text & Skills */}
        <div className="hero-left">
          <div className="hero-top">
            <div className="hero-subtitle">
              <div className="status-dot-wrap">
                <div className="status-dot"></div>
              </div>
              <span>{t('hero.available')}</span>
            </div>
            <h1 className="hero-heading">
              {t('hero.name').split('<br />').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <a href="mailto:jobs@srujaatrans.com" className="hero-email">jobs@srujaatrans.com</a>
            <p className="hero-description" dangerouslySetInnerHTML={{ __html: t('hero.description') }}></p>
          </div>
        </div>

        {/* Right Column: Stats & Awards */}
        <div className="hero-right">
          <div className="hero-experience">
            <div className="exp-stats">
              <h2 className="exp-years">14+</h2>
              <p className="exp-text">{t('hero.years')}<br />{t('hero.ofExperience')}</p>
            </div>

            <div className="hero-awards">
              <div className="award-card" onClick={() => setActiveModalImage('CTP.png')} style={{ cursor: 'pointer' }}>
                <div>
                  <h6>CTP</h6>
                  <p className="award-desc">{t('hero.ctpDesc')}</p>
                </div>
              </div>

              <div className="award-card" onClick={() => setActiveModalImage('ISTQB Certificate.jpg')} style={{ cursor: 'pointer' }}>
                <div>
                  <h6>ISTBQ Certificate</h6>
                  <p className="award-desc">{t('hero.istqbDesc')}</p>
                </div>
              </div>

              <div className="award-card" onClick={() => setActiveModalImage('ProZ pro Netwrok.png')} style={{ cursor: 'pointer' }}>
                <div>
                  <h6>Certified Pro Network</h6>
                  <p className="award-desc">{t('hero.prozDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {activeModalImage && (
        <div className="image-modal-overlay" onClick={() => setActiveModalImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setActiveModalImage(null)}>✕</button>
            <img src={activeModalImage} alt="Certificate Full" className="image-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;