import React from 'react';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './SkillsSection.css';

const SkillsSection = () => {
  const t = useContent();
  const { lists } = useSiteContent();

  return (
    <section className="skills-section bg-background-1" id="skills">
      <div className="container skills-container">
        <div className="skills-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('skills.title')}</span>
            </div>
            <h2>{t('skills.heading')}</h2>
          </div>
        </div>

        <div className="skills-right">
          <div className="skills-grid translation-grid">
            {lists.skills.map((skill) => (
              <div className="skill-card-lg" key={skill._id}>
                <div className="skill-icon-lg">
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                    />
                  ) : (
                    <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
                      <circle cx="32" cy="32" r="28" fill="#eaeaea" />
                    </svg>
                  )}
                </div>
                <div className="skill-details">
                  <div className="skill-name">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
