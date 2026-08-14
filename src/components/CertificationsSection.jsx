import React, { useState } from 'react';
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
  Award
} from 'lucide-react';

const CertificationsSection = () => {
  const [activeModalImage, setActiveModalImage] = useState(null);

  const certificates = [
    { id: 1, line1: 'AI Essentials for', line2: 'Project Managers', Icon: Briefcase, color: '#0277bd', image: 'certifications/AIEssentialsforProjectManagers_01.jpg' },
    { id: 2, line1: 'AI for Business', line2: 'Operations', Icon: Building, color: '#1565c0' },
    { id: 3, line1: 'AI Mastery', line2: 'Certificate Program', Icon: Award, color: '#f5a623' },
    { id: 4, line1: 'AI Mastery', line2: 'Certificate Program', Icon: Cpu, color: '#9c27b0' },
    { id: 5, line1: 'AI Workflow', line2: 'Automation Program', Icon: Zap, color: '#009688' },
    { id: 6, line1: 'Master of ChatGPT', line2: 'Certificate', Icon: MessageSquare, color: '#10a37f' },
    { id: 7, line1: 'Master of Claude', line2: 'Certificate', Icon: Bot, color: '#5e35b1' },
    { id: 8, line1: 'Master of Claude', line2: 'Code Certificate', Icon: Code, color: '#4527a0' },
    { id: 9, line1: 'Master of Claude', line2: 'Deep Dive', Icon: Layers, color: '#3949ab' },
    { id: 10, line1: 'Master of Claude', line2: 'for Excel Certificate', Icon: FileSpreadsheet, color: '#107c41' },
    { id: 11, line1: 'Master of Gemini', line2: 'Certificate', Icon: Sparkles, color: '#4285f4' },
    { id: 12, line1: 'Master of Jasper', line2: 'Certificate', Icon: PenTool, color: '#e91e63' },
    { id: 13, line1: 'Master of Lovable', line2: 'Certificate', Icon: Heart, color: '#e53935' },
    { id: 14, line1: 'Master of Midjourney', line2: 'Certificate', Icon: Palette, color: '#ab47bc' }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="container certifications-container">
        <div className="certifications-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">Achievements</span>
            </div>
            <h2>Certifications</h2>
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
            <button className="image-modal-close" onClick={() => setActiveModalImage(null)}>✕</button>
            <img src={activeModalImage} alt="Certificate Full" className="image-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
