import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './CertificationsSection.css';

const CertificationsSection = () => {
  const t = useContent();
  const { lists } = useSiteContent();
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <section className="certifications-section" id="certifications">
      <div className="container certifications-container">
        <div className="certifications-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('certifications.title')}</span>
            </div>
            <h2>{t('certifications.heading')}</h2>
          </div>
        </div>

        <div className="certifications-right">
          <div className="certifications-grid">
            {lists.certifications.map((cert) => (
              <div
                className="cert-card-bar"
                key={cert._id}
                onClick={() => cert.image && setActiveModalImage(cert.image)}
                style={{ cursor: cert.image ? 'pointer' : 'default' }}
              >
                <Award className="cert-icon" size={24} style={{ color: cert.color }} />
                <div className="cert-name">
                  {cert.line1} <br /> {cert.line2}
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
