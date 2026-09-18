import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../context/SiteContentContext.jsx';
import {
  LayoutGrid,
  Languages,
  Award
} from 'lucide-react';
import './AboutSection.css';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const t = useContent();
  return (
    <section className="about-bento-section" id="about">
      <div className="container about-bento-container">
        <div className="section-title bento-section-title">
          <h2>{t('about.heading') === 'Summary' ? 'About me' : t('about.heading')}</h2>
          <div className="header-underline"></div>
        </div>

        <div className="bento-grid">
          {/* Main Hero Card */}
          <div className="bento-item bento-hero gradient-blue">
            <h4 className="bento-subtitle">{t('about.subHeading')}</h4>
            <div className="bento-intro" dangerouslySetInnerHTML={{ __html: t('about.intro') }}></div>
            
          </div>

          {/* Stat Cards */}
          <div className="bento-item bento-stat gradient-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '20px 30px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {t('about.languagesTitle')}
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '0.95rem', lineHeight: '1.8', textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: t('about.languagesList') }}>
            </ul>
          </div>

          <div className="bento-item bento-stat gradient-2">
            <div className="stat-number"><CountUp end={Number(t('about.stat1Number')) || 40} suffix={t('about.stat1Suffix')} /></div>
            <div className="stat-label">{t('about.stat1Label')}</div>
            <div className="stat-desc">{t('about.h2_desc')}</div>
          </div>

          <div className="bento-item bento-stat gradient-3">
            <div className="stat-number"><CountUp end={Number(t('about.stat2Number')) || 20} suffix={t('about.stat2Suffix')} /></div>
            <div className="stat-label">{t('about.stat2Label')}</div>
            <div className="stat-desc">{t('about.h3_desc')}</div>
          </div>

          {/* Expertise Card */}
          <div className="bento-item bento-expertise gradient-teal horizontal-card">
            <div className="bento-icon-wrapper">
              <LayoutGrid size={26} strokeWidth={2} />
            </div>
            <div className="bento-content inline-content">
              <span className="bento-title">{t('about.h4_bold')} </span>
              <span className="bento-text">{t('about.h4_desc')}</span>
            </div>
          </div>

          {/* Professional Commitment Card */}
          <div className="bento-item bento-commitment gradient-blue horizontal-card">
            <div className="bento-icon-wrapper">
              <Award size={26} strokeWidth={2} />
            </div>
            <div className="bento-content inline-content">
              <span className="bento-title">{t('about.h9_bold')} </span>
              <span className="bento-text">{t('about.h9_desc')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;