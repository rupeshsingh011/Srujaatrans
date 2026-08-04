import React from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsSection.css';
import { getSkillIcon } from './SkillIcons';

const SkillsSection = () => {
  const { t } = useTranslation();
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
            {[
              'SDL Trados Studio', 'Wordfast', 'Translation Workspace', 'InDesign',
              'Xbench', 'Envelope', 'Xliff Editor', 'ISM, etc...',
              'Across', 'MemoQ', 'Coach', 'Phrase', 'Matecat'
            ].map((tool, index) => {
              return (
                <div
                  className="skill-card-lg"
                  key={tool}
                  style={['Translation Workspace', 'Envelope', 'ISM, etc...', 'Coach'].includes(tool) ? { width: 'calc(100% + 10px)' } : {}}
                >
                  <div className="skill-icon-lg">
                    {getSkillIcon(tool)}
                  </div>
                  <div className="skill-details">
                    <div className="skill-name">{tool}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;