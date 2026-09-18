import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'heading', label: 'Heading' },
  { key: 'subHeading', label: 'Sub-heading' },
  { key: 'intro', label: 'Intro paragraph (supports <strong>)', multiline: true },
  
  { key: 'languagesTitle', label: 'Languages Title' },
  { key: 'languagesList', label: 'Languages List (supports HTML <li><strong>...</strong></li>)', multiline: true },
  
  { key: 'stat1Number', label: 'Stat 1 Number (e.g. 40)' },
  { key: 'stat1Suffix', label: 'Stat 1 Suffix (e.g. +)' },
  { key: 'stat1Label', label: 'Stat 1 Label (e.g. Global LSPs)' },
  { key: 'h2_desc', label: 'Stat 1 description' },

  { key: 'stat2Number', label: 'Stat 2 Number (e.g. 20)' },
  { key: 'stat2Suffix', label: 'Stat 2 Suffix (e.g. M+)' },
  { key: 'stat2Label', label: 'Stat 2 Label (e.g. Words)' },
  { key: 'h3_desc', label: 'Stat 2 description' },
  { key: 'h4_bold', label: 'Domain expertise — bold part' },
  { key: 'h4_desc', label: 'Domain expertise — description' },
  { key: 'h9_bold', label: 'Professional commitment — bold part' },
  { key: 'h9_desc', label: 'Professional commitment — description' },
];

export default function AboutEditor() {
  return (
    <SectionEditor
      section="about"
      title="About Section"
      description="The summary and key-highlights list on the home page."
      fields={fields}
    />
  );
}
