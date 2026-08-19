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
            <div className="about-content">
              <p dangerouslySetInnerHTML={{ __html: t('about.intro') }}></p>
              <h5 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '15px 0' }}>{t('about.highlightsTitle')}</h5>
              <ul className="about-list">
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
                  <div><strong>{t('about.h1_bold')}</strong> {t('about.h1_desc')}</div>
                </li>
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span>
                  <div><strong>{t('about.h2_bold')}</strong> {t('about.h2_desc')}</div>
                </li>
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></span>
                  <div><strong>{t('about.h3_bold')}</strong> {t('about.h3_desc')}</div>
                </li>
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></span>
                  <div><strong>{t('about.h4_bold')}</strong> {t('about.h4_desc')}</div>
                </li>
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></span>
                  <div><strong>{t('about.h5_bold')}</strong> {t('about.h5_desc')}</div>
                </li>
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M17 2.1l4 4-4 4"></path><path d="M3 12.2v-2a4 4 0 0 1 4-4h13.8"></path><path d="M7 21.9l-4-4 4-4"></path><path d="M21 11.8v2a4 4 0 0 1-4 4H3.2"></path></svg></span>
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
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></span>
                  <div><strong>{t('about.h7_bold')}</strong> {t('about.h7_desc')}</div>
                </li>
                <li>
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span>
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
                  <span className="icon" style={{ color: '#7970d8' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
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