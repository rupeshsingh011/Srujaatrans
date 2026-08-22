import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CertificationsSection.css';
import {
  Briefcase,
  Building,
  Cpu,
  Zap,
  MessageSquare,
  Bot,
  Code,
  Layers,
  FileSpreadsheet,
  Sparkles,
  PenTool,
  Heart,
  Palette,
  Award,
  X
} from 'lucide-react';

const CertificationsSection = () => {
  const { t } = useTranslation();
  const [activeModalImage, setActiveModalImage] = useState(null);

  const certificates = [
    { id: 1, line1: 'AI Essentials for', line2: 'Project Managers', Icon: Briefcase, color: '#0277bd', image: 'Certifications/AI Essentials for Project Managers_01.jpg' },
    { id: 2, line1: 'AI for Business', line2: 'Operations', Icon: Building, color: '#1565c0', image: 'Certifications/AI for Business Operations_02.jpg' },
    { id: 3, line1: 'AI Mastery', line2: 'Certificate Program', Icon: Award, color: '#f5a623', image: 'Certifications/AI Mastery Certifiate Program_03.jpg' },
    { id: 4, line1: 'AI Mastery', line2: 'Certificate Program', Icon: Cpu, color: '#9c27b0', image: 'Certifications/AI Mastery Certificate Program_04.jpg' },
    { id: 5, line1: 'AI Workflow', line2: 'Automation Program', Icon: Zap, color: '#009688', image: 'Certifications/AI Workflow Automation Program_05.jpg' },
    { id: 6, line1: 'Master of ChatGPT', line2: 'Certificate', Icon: MessageSquare, color: '#10a37f', image: 'Certifications/Master of ChatGPT Certificate_06.jpg' },
    { id: 7, line1: 'Master of Claude', line2: 'Certificate', Icon: Bot, color: '#5e35b1', image: 'Certifications/Master of Claude Certificate_07.jpg' },
    { id: 8, line1: 'Master of Claude', line2: 'Code Certificate', Icon: Code, color: '#4527a0', image: 'Certifications/Master of Claude Code Certificate_08.jpg' },
    { id: 9, line1: 'Master of Claude', line2: 'Deep Dive', Icon: Layers, color: '#3949ab', image: 'Certifications/Master of Claude Deep Dive_09.jpg' },
    { id: 10, line1: 'Master of Claude', line2: 'for Excel Certificate', Icon: FileSpreadsheet, color: '#107c41', image: 'Certifications/Master of Claude for Excel Certificate_10.jpg' },
    { id: 11, line1: 'Master of Gemini', line2: 'Certificate', Icon: Sparkles, color: '#4285f4', image: 'Certifications/Master of Gemini Certificate_11.jpg' },
    { id: 12, line1: 'Master of Jasper', line2: 'Certificate', Icon: PenTool, color: '#e91e63', image: 'Certifications/Master of Jasper Certificate_12.jpg' },
    { id: 13, line1: 'Master of Lovable', line2: 'Certificate', Icon: Heart, color: '#e53935', image: 'Certifications/Master of Lovable Certificate_13.jpg' },
    { id: 14, line1: 'Master of Midjourney', line2: 'Certificate', Icon: Palette, color: '#ab47bc', image: 'Certifications/Master of Midjourney Certificate_14.jpg' }
  ];

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
            {certificates.map((cert) => (
              <div 
                className="cert-card-bar" 
                key={cert.id}
                onClick={() => cert.image && setActiveModalImage(cert.image)}
                style={{ cursor: cert.image ? 'pointer' : 'default' }}
              >
                <cert.Icon className="cert-icon" size={24} style={{ color: cert.color }} />
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
