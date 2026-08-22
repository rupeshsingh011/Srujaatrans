import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <section className="hero-section" id="home">

      <img src="Srujaa.png" alt="Srujaa Portrait" className="hero-bg-logo" />
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
            <p className="hero-description" dangerouslySetInnerHTML={{ __html: t('hero.description') }}></p>
            <hr className="hero-divider" />
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
            <button className="image-modal-close" onClick={() => setActiveModalImage(null)} aria-label="Close"><X size={28} strokeWidth={2} /></button>
            <img src={activeModalImage} alt="Certificate Full" className="image-modal-img" />
          </div>
        </div>
      )}


    </section>
  );
};

export default HeroSection;