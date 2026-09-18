import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'name', label: 'Greeting / Name' },
  { key: 'tagline', label: 'Tagline (supports HTML)', multiline: true },
  { key: 'description', label: 'Description (supports <br/>)', multiline: true },
  { key: 'years', label: '"Years" label' },
  { key: 'ofExperience', label: '"of experience" label' },
  { key: 'downloadResume', label: 'Download resume button label' },
  { key: 'downloadCV', label: 'Download CV button label' },
];

export default function HeroEditor() {
  return (
    <SectionEditor
      section="hero"
      title="Hero Section"
      description="The top banner shown at the very top of the home page."
      fields={fields}
    />
  );
}
