import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Section label (small caption)' },
  { key: 'heading', label: 'Heading' },
  { key: 'domainsTitle', label: 'Domains — title' },
  { key: 'domainsDesc', label: 'Domains — description', multiline: true },
  { key: 'languagesTitle', label: 'Languages — title' },
  { key: 'lang1', label: 'Language 1' },
  { key: 'lang2', label: 'Language 2' },
  { key: 'lang3', label: 'Language 3' },
  { key: 'lang4', label: 'Language 4' },
  { key: 'lang5', label: 'Language 5' },
  { key: 'educationTitle', label: 'Education — title' },
  { key: 'edu1', label: 'Education 1' },
  { key: 'edu2', label: 'Education 2' },
  { key: 'edu3', label: 'Education 3' },
  { key: 'edu4', label: 'Education 4' },
  { key: 'edu5', label: 'Education 5' },
];

export default function ExperienceEditor() {
  return (
    <SectionEditor
      section="experience"
      title="Experience Section"
      description="Domains, languages, and education info on the home page."
      fields={fields}
    />
  );
}
