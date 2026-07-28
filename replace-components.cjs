const fs = require('fs');
const path = require('path');

const srcDir = '/Users/apple/Desktop/Srujaa/src/components';
const pagesDir = '/Users/apple/Desktop/Srujaa/src/pages';

const replacements = {
  'ExperienceSection.jsx': {
    target: [
      `import React from 'react';`,
      `<span className="caption-title">Experience</span>`,
      `<h2>My Info..</h2>`,
      `<h5 className="exp-title">My Domains</h5>`,
      `Since 2009, I have handled various domains from SAP, IT, Business, Medical, ICF, Automobile, Android Apps, E-Learning, Etc. in all the languages. Also, I have helped Transcribe and transcreate various contents in all the languages. Being an avid reader coupled with my love for research and detail has helped me understand and develop my language skills to handle any domain with equal expertise.`,
      `<h5 className="exp-title">My Languages</h5>`,
      `<li>Marathi – Mother tongue</li>`,
      `<li>Hindi – Native level</li>`,
      `<li>English – Native level</li>`,
      `<li>German – Professional Level (B1.1 Certified (M2))</li>`,
      `<li>Oriya – Fluent in speaking</li>`,
      `<h5 className="exp-title">My Education</h5>`,
      `<li>Proz Certified Professional translator</li>`,
      `<li>CTP Certified English – German Translator</li>`,
      `<li>ISTQB certified; Year: 2010 (all certificates are attached in below pages)</li>`,
      `<li>German Language Courses – Max Mueller Bhawan up to Level B1; Year: 1991</li>`,
      `<li>B.COM, IGNOU, DELHI – Year of passing: 1998</li>`,
      `const ExperienceSection = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<span className="caption-title">{t('experience.title')}</span>`,
      `<h2>{t('experience.heading')}</h2>`,
      `<h5 className="exp-title">{t('experience.domainsTitle')}</h5>`,
      `{t('experience.domainsDesc')}`,
      `<h5 className="exp-title">{t('experience.languagesTitle')}</h5>`,
      `<li>{t('experience.lang1')}</li>`,
      `<li>{t('experience.lang2')}</li>`,
      `<li>{t('experience.lang3')}</li>`,
      `<li>{t('experience.lang4')}</li>`,
      `<li>{t('experience.lang5')}</li>`,
      `<h5 className="exp-title">{t('experience.educationTitle')}</h5>`,
      `<li>{t('experience.edu1')}</li>`,
      `<li>{t('experience.edu2')}</li>`,
      `<li>{t('experience.edu3')}</li>`,
      `<li>{t('experience.edu4')}</li>`,
      `<li>{t('experience.edu5')}</li>`,
      `const ExperienceSection = () => {\n  const { t } = useTranslation();`
    ]
  },
  'ServicesSection.jsx': {
    target: [
      `import React from 'react';`,
      `<span className="caption-title">Services</span>`,
      `<h2>Quality you can trust</h2>`,
      `const ServicesSection = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<span className="caption-title">{t('services.title')}</span>`,
      `<h2>{t('services.heading')}</h2>`,
      `const ServicesSection = () => {\n  const { t } = useTranslation();`
    ]
  },
  'SkillsSection.jsx': {
    target: [
      `import React from 'react';`,
      `<span className="caption-title">My Skills</span>`,
      `<h2>Tools I Use</h2>`,
      `const SkillsSection = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<span className="caption-title">{t('skills.title')}</span>`,
      `<h2>{t('skills.heading')}</h2>`,
      `const SkillsSection = () => {\n  const { t } = useTranslation();`
    ]
  },
  'WorkSection.jsx': {
    target: [
      `import React from 'react';`,
      `<span className="caption-title">Work</span>`,
      `<h2>My Selected Work</h2>`,
      `const WorkSection = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<span className="caption-title">{t('work.title')}</span>`,
      `<h2>{t('work.heading')}</h2>`,
      `const WorkSection = () => {\n  const { t } = useTranslation();`
    ]
  },
  'Reviews.jsx': {
    target: [
      `import React from 'react';`,
      `<span className="caption-title">Reviews</span>`,
      `<h2>What Clients Say</h2>`,
      `const Reviews = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<span className="caption-title">{t('reviews.title')}</span>`,
      `<h2>{t('reviews.heading')}</h2>`,
      `const Reviews = () => {\n  const { t } = useTranslation();`
    ]
  },
  'Footer.jsx': {
    target: [
      `import React from 'react';`,
      `<div className="footer-label">Contact us</div>`,
      `<div className="footer-label">Follow us</div>`,
      `<div className="footer-label">Email</div>`,
      `I am available for new projects and collaborations, helping businesses communicate globally through precise translation, localization, editing, and linguistic quality assurance.`,
      `© 2026 Srujaatrans`,
      `Work by Mugdha.`,
      `const Footer = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<div className="footer-label">{t('footer.contactUsButton')}</div>`,
      `<div className="footer-label">{t('contact.followUs')}</div>`,
      `<div className="footer-label">{t('contact.email')}</div>`,
      `{t('footer.desc')}`,
      `{t('footer.copyright')}`,
      `{t('footer.workBy')}`,
      `const Footer = () => {\n  const { t } = useTranslation();`
    ]
  }
};

const pagesReplacements = {
  'Contact.jsx': {
    target: [
      `import React from 'react';`,
      `<span className="caption-title">Contact US</span>`,
      `<h1>Let's Connect</h1>`,
      `<div className="contact-label">Contact us</div>`,
      `<div className="contact-label">Email</div>`,
      `<div className="contact-label">Follow us</div>`,
      `<label className="field-label">Full Name</label>`,
      `placeholder="Enter your full name"`,
      `<label className="field-label">Email</label>`,
      `placeholder="Enter your email"`,
      `<label className="field-label">Phone</label>`,
      `placeholder="Enter your phone number"`,
      `<label className="field-label">Send Message</label>`,
      `placeholder="Enter your message..."`,
      `Submit Now`,
      `const Contact = () => {`
    ],
    replacement: [
      `import React from 'react';\nimport { useTranslation } from 'react-i18next';`,
      `<span className="caption-title">{t('contact.title')}</span>`,
      `<h1>{t('contact.heading')}</h1>`,
      `<div className="contact-label">{t('contact.contactUs')}</div>`,
      `<div className="contact-label">{t('contact.email')}</div>`,
      `<div className="contact-label">{t('contact.followUs')}</div>`,
      `<label className="field-label">{t('contact.fullName')}</label>`,
      `placeholder={t('contact.enterName')}`,
      `<label className="field-label">{t('contact.email')}</label>`,
      `placeholder={t('contact.enterEmail')}`,
      `<label className="field-label">{t('contact.phone')}</label>`,
      `placeholder={t('contact.enterPhone')}`,
      `<label className="field-label">{t('contact.sendMessage')}</label>`,
      `placeholder={t('contact.enterMessage')}`,
      `{t('contact.submit')}`,
      `const Contact = () => {\n  const { t } = useTranslation();`
    ]
  }
};

function processDir(directory, replaceMap) {
  for (const [file, opts] of Object.entries(replaceMap)) {
    const filePath = path.join(directory, file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      opts.target.forEach((tgt, idx) => {
        content = content.replace(tgt, opts.replacement[idx]);
      });
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + file);
    } else {
      console.log('File not found: ' + file);
    }
  }
}

processDir(srcDir, replacements);
processDir(pagesDir, pagesReplacements);
