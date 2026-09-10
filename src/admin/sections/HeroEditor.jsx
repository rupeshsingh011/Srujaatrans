import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'name', label: 'Greeting / Name' },
  { key: 'available', label: 'Availability badge text' },
  { key: 'description', label: 'Description (supports <br/>)', multiline: true },
  { key: 'years', label: '"Years" label' },
  { key: 'ofExperience', label: '"of experience" label' },
  { key: 'ctpDesc', label: 'CTP award description' },
  { key: 'istqbDesc', label: 'ISTQB award description' },
  { key: 'prozDesc', label: 'ProZ award description' },
  { key: 'multilingualTitle', label: 'Multilingual title' },
  { key: 'multilingualDesc', label: 'Multilingual description' },
  { key: 'happyClients', label: 'Happy Clients label' },
  { key: 'projectsCompleted', label: 'Projects Completed label' },
  { key: 'languagesStat', label: 'Languages label' },
  { key: 'yearsExperienceStat', label: 'Years Experience label' },
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
