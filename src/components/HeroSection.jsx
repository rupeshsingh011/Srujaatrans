import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Download, Globe, Award, FileText, Share2, Users, Clock, CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/SiteContentContext.jsx';
import './HeroSection.css';

const HeroSection = () => {
  const t = useContent();

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Left Content Area */}
        <div className="hero-content">


          <h1 className="hero-title" dangerouslySetInnerHTML={{
            __html: t('hero.name')
              .replace(' हूँ,', '')
              .replace('हूँ,', '')
              .replace('Mugdha ( Srujaa )', 'MAGIC_EN')
              .replace('Mugdha', 'MAGIC_EN')
              .replace('मैं मुग्धा ( Srujaa )', 'MAGIC_HI')
              .replace('मी मुग्धा ( Srujaa )', 'MAGIC_MR')
              .replace('मैं मुग्धा', 'MAGIC_HI')
              .replace('मी मुग्धा', 'MAGIC_MR')
              .replace('मुग्धा ( Srujaa )', 'MAGIC_LOCAL')
              .replace('मुग्धा', 'MAGIC_LOCAL')
              .replace('MAGIC_EN', '<br/><span class="text-primary" style="display: inline-block; margin-top: -15px; white-space: nowrap;">Mugdha <span style="color: #555; font-size: 0.85em;">(Srujaa)</span></span>')
              .replace('MAGIC_HI', '<br/>मैं <span class="text-primary" style="display: inline-block; margin-top: -15px; white-space: nowrap;">मुग्धा <span style="color: #555; font-size: 0.85em;">(Srujaa)</span></span>')
              .replace('MAGIC_MR', '<br/>मी <span class="text-primary" style="display: inline-block; margin-top: -15px; white-space: nowrap;">मुग्धा <span style="color: #555; font-size: 0.85em;">(Srujaa)</span></span>')
              .replace('MAGIC_LOCAL', '<br/><span class="text-primary" style="display: inline-block; margin-top: -15px; white-space: nowrap;">मुग्धा <span style="color: #555; font-size: 0.85em;">(Srujaa)</span></span>')
          }}></h1>

          <div className="hero-tagline" dangerouslySetInnerHTML={{ __html: t('hero.tagline') }}>
          </div>

          <p className="hero-description" dangerouslySetInnerHTML={{ __html: t('hero.description') }}></p>

          <div className="hero-actions">
            <a href="/Mugdha_Resume.pdf" download="Mugdha_Resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              <span>{t('about.downloadResume').replace('Download ', '')}</span>
            </a>
            <a href="/CV_Mugdha%20Ghate_V28.pdf" download="CV_Mugdha Ghate_V28.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              <span>{t('about.downloadCV').replace('Download ', '').replace('BCV', 'Blind CV')}</span>
            </a>
          </div>
        </div>

        {/* Right Image Area Placeholder */}
        <div className="hero-image-container">
          <div className="hero-image-inner">
            {/* Placeholder for the image. Add your image here later */}
            <div className="image-placeholder">
              <img src="/MG-2.png" alt="Mugdha" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div className="experience-badge">
            <span className="exp-number">14+</span>
            <span className="exp-text">{t('hero.years')}<br />{t('hero.ofExperience')}</span>
          </div>
        </div>
      </div>





    </section>
  );
};

export default HeroSection;