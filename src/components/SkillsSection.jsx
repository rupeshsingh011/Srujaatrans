import React from 'react';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './SkillsSection.css';

const SkillsSection = () => {
  const t = useContent();
  const { lists } = useSiteContent();

  return (
    <section className="skills-section bg-background-1" id="skills">
      <div className="container">
        <div className="segue-title-wrapper">
          <h2 className="segue-heading">{t('skills.heading')}</h2>
          <div className="skills-underline"></div>
          <p className="skills-subtitle">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {[...lists.skills, ...lists.skills].map((skill, index) => (
              <div className="skill-card-rect" key={`${skill._id}-${index}`}>
                <div className="skill-icon-rect">
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
                      <circle cx="32" cy="32" r="28" fill="#eaeaea" />
                    </svg>
                  )}
                </div>
                <div className="skill-details-rect">
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
