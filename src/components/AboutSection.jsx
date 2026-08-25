import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/SiteContentContext.jsx';
import {
  CheckCircle2,
  Globe2,
  BookOpenText,
  LayoutGrid,
  Languages,
  ArrowLeftRight,
  Wrench,
  Layers3,
  Award
} from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const t = useContent();
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
            <div className="about-content">
              <p dangerouslySetInnerHTML={{ __html: t('about.intro') }}></p>
              <h5 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '15px 0' }}>{t('about.highlightsTitle')}</h5>
              <ul className="about-list">
                <li>
                  <span className="icon"><CheckCircle2 size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h1_bold')}</strong> {t('about.h1_desc')}</div>
                </li>
                <li>
                  <span className="icon"><Globe2 size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h2_bold')}</strong> {t('about.h2_desc')}</div>
                </li>
                <li>
                  <span className="icon"><BookOpenText size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h3_bold')}</strong> {t('about.h3_desc')}</div>
                </li>
                <li>
                  <span className="icon"><Layers3 size={18} strokeWidth={2.25} /></span>
                  <div>
                    <strong>{t('about.h8_title')}</strong>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '5px' }}>
                      <ul className="sub-list" style={{ margin: 0 }}>
                        <li>{t('about.srv1')}</li>
                        <li>{t('about.srv2')}</li>
                        <li>{t('about.srv3')}</li>
                        <li>{t('about.srv4')}</li>
                      </ul>
                      <ul className="sub-list" style={{ margin: 0 }}>
                        <li>{t('about.srv5')}</li>
                        <li>{t('about.srv6')}</li>
                        <li>{t('about.srv7')}</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="icon"><Languages size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h5_bold')}</strong> {t('about.h5_desc')}</div>
                </li>
                <li>
                  <span className="icon"><ArrowLeftRight size={18} strokeWidth={2.25} /></span>
                  <div>
                    <strong>{t('about.h6_title')}</strong>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '5px' }}>
                      <ul className="sub-list" style={{ margin: 0 }}>
                        <li>English ↔ Marathi</li>
                        <li>Hindi ↔ English</li>
                        <li>German ↔ English</li>
                      </ul>
                      <ul className="sub-list" style={{ margin: 0 }}>
                        <li>German ↔ Hindi</li>
                        <li>German ↔ Marathi</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="icon"><LayoutGrid size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h4_bold')}</strong> {t('about.h4_desc')}</div>
                </li>
                <li>
                  <span className="icon"><Wrench size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h7_bold')}</strong> {t('about.h7_desc')}</div>
                </li>
                <li>
                  <span className="icon"><Award size={18} strokeWidth={2.25} /></span>
                  <div><strong>{t('about.h9_bold')}</strong> {t('about.h9_desc')}</div>
                </li>
              </ul>
              <p>
                {t('about.outro')}
              </p>
            </div>
          </div>
          <div className="button-wrap">
            <a href="/Mugdha_Resume.pdf" download="Mugdha_Resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">{t('about.downloadResume')}</a>
            <a href="/CV_Mugdha%20Ghate_V28.pdf" download="CV_Mugdha_Ghate_V28.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">{t('about.downloadCV')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;