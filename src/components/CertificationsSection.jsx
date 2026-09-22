import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './CertificationsSection.css';

const deTranslations = {
  "CTP": "CTP",
  "ISTBQ Certified": "ISTQB-zertifiziert",
  "ISTQB Certified": "ISTQB-zertifiziert",
  "Certified Pro Network": "Zertifiziertes Pro-Netzwerk",
  "AI Essentials for Project Managers": "KI-Grundlagen für Projektmanager",
  "AI for Business Operations": "KI für Geschäftsabläufe",
  "AI Mastery Certificate Program": "KI-Mastery-Zertifikatsprogramm",
  "AI Workflow Automation Program": "KI-Workflow-Automatisierungsprogramm",
  "Master of ChatGPT Certificate": "Master of ChatGPT-Zertifikat",
  "Master of Claude Certificate": "Master of Claude-Zertifikat",
  "Master of Claude Code Certificate": "Master of Claude Code-Zertifikat",
  "Master of Claude Deep Dive": "Master of Claude Deep Dive",
  "Master of Claude for Excel Certificate": "Master of Claude für Excel-Zertifikat",
  "Master of Gemini Certificate": "Master of Gemini-Zertifikat",
  "Master of Jasper Certificate": "Master of Jasper-Zertifikat",
  "Master of Lovable Certificate": "Master of Lovable-Zertifikat",
  "Master of Midjourney Certificate": "Master of Midjourney-Zertifikat"
};

const CertificationsSection = () => {
  const { i18n } = useTranslation();
  const t = useContent();
  const { lists } = useSiteContent();
  const [activeModalImage, setActiveModalImage] = useState(null);

  const getTranslatedName = (name) => {
    if (!name) return name;
    // Attempt to match the name exactly, or if it has trailing spaces
    const cleanName = name.trim();
    if (i18n.language === 'de' && deTranslations[cleanName]) {
      return deTranslations[cleanName];
    }
    return name;
  };

  return (
    <section className="certifications-section" id="certifications">
      <div className="container certifications-container">
        <div className="certifications-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('certifications.title')}</span>
            </div>
            <h2>{t('certifications.heading')}</h2>
              <div className="cert-underline"></div>
          </div>
        </div>

        <div className="certifications-right">
          <div className="certifications-grid">
            {[
              { _id: 'custom-ctp', line1: 'CTP', line2: '', image: '/CTP.png', color: '#ff6b6b' },
              { _id: 'custom-istqb', line1: 'ISTBQ Certified', line2: '', image: '/ISTQB Certificate.jpg', color: '#4a90e2' },
              { _id: 'custom-proz', line1: 'Certified Pro Network', line2: '', image: '/Proz PRO Network.jpg', color: '#5cb85c' },
              ...lists.certifications.filter(c => !['CTP', 'ISTBQ Certified', 'Certified Pro Network', 'ISTQB Certified'].includes(c.line1))
            ].map((cert) => (
              <div
                className="cert-card-bar"
                key={cert._id}
                onClick={() => cert.image && setActiveModalImage(cert.image)}
                style={{ cursor: cert.image ? 'pointer' : 'default' }}
              >
                <Award className="cert-icon" size={24} style={{ color: cert.color }} />
                <div className="cert-name">
                  {getTranslatedName(cert.line1)} <br /> {getTranslatedName(cert.line2)}
                </div>
              </div>
            ))}
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

export default CertificationsSection;
