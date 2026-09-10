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
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">{t('hero.available')}</span>
          </div>

          <h1 className="hero-title" dangerouslySetInnerHTML={{ 
            __html: t('hero.name')
              .replace('Mugdha', '<br/><span class="text-primary">Mugdha</span>')
              .replace('मैं मुग्धा', 'MAGIC_HI')
              .replace('मी मुग्धा', 'MAGIC_MR')
              .replace('मुग्धा', '<br/><span class="text-primary">मुग्धा</span>')
              .replace('MAGIC_HI', '<br/>मैं <span class="text-primary">मुग्धा</span>')
              .replace('MAGIC_MR', '<br/>मी <span class="text-primary">मुग्धा</span>')
          }}></h1>

          <p className="hero-description" dangerouslySetInnerHTML={{ __html: t('hero.description') }}></p>

          <div className="hero-actions">
            <Link to="/contact-us" className="btn btn-primary">
              <Send size={18} />
              <span>Hire Me</span>
            </Link>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              <span>Download CV</span>
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

      {/* Info Cards Row */}
      <div className="info-cards-container">
        <a href="/CTP.png" target="_blank" rel="noopener noreferrer" className="info-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-icon-wrapper">
            <Award className="card-icon" />
          </div>
          <div className="card-text">
            <h3>CTP</h3>
            <p>{t('hero.ctpDesc')}</p>
          </div>
        </a>

        <a href="/ISTQB Certificate.jpg" target="_blank" rel="noopener noreferrer" className="info-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-icon-wrapper">
            <FileText className="card-icon" />
          </div>
          <div className="card-text">
            <h3>ISTBQ Certificate</h3>
            <p>{t('hero.istqbDesc')}</p>
          </div>
        </a>

        <a href="/Proz PRO Network.jpg" target="_blank" rel="noopener noreferrer" className="info-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-icon-wrapper">
            <Share2 className="card-icon" />
          </div>
          <div className="card-text">
            <h3>Certified Pro Network</h3>
            <p>{t('hero.prozDesc')}</p>
          </div>
        </a>

        <div className="info-card">
          <div className="card-icon-wrapper">
            <Globe className="card-icon" />
          </div>
          <div className="card-text">
            <h3>{t('hero.multilingualTitle')}</h3>
            <p>{t('hero.multilingualDesc')}</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="info-cards-container" style={{ marginTop: '0' }}>
        <div className="info-card">
          <div className="card-icon-wrapper">
            <Users className="card-icon" />
          </div>
          <div className="card-text">
            <h3>500+</h3>
            <p>{t('hero.happyClients')}</p>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-icon-wrapper">
            <FileText className="card-icon" />
          </div>
          <div className="card-text">
            <h3>10K+</h3>
            <p>{t('hero.projectsCompleted')}</p>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-icon-wrapper">
            <Globe className="card-icon" />
          </div>
          <div className="card-text">
            <h3>20+</h3>
            <p>{t('hero.languagesStat')}</p>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-icon-wrapper">
            <Clock className="card-icon" />
          </div>
          <div className="card-text">
            <h3>14+</h3>
            <p>{t('hero.yearsExperienceStat')}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;