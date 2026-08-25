import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Section label (small caption)' },
  { key: 'heading', label: 'Heading' },
  { key: 'subHeading', label: 'Sub-heading' },
  { key: 'intro', label: 'Intro paragraph (supports <strong>)', multiline: true },
  { key: 'highlightsTitle', label: 'Highlights title' },
  { key: 'h1_bold', label: 'Highlight 1 — bold part' },
  { key: 'h1_desc', label: 'Highlight 1 — description' },
  { key: 'h2_bold', label: 'Highlight 2 — bold part' },
  { key: 'h2_desc', label: 'Highlight 2 — description' },
  { key: 'h3_bold', label: 'Highlight 3 — bold part' },
  { key: 'h3_desc', label: 'Highlight 3 — description' },
  { key: 'h8_title', label: 'Core services — title' },
  { key: 'srv1', label: 'Core service 1' },
  { key: 'srv2', label: 'Core service 2' },
  { key: 'srv3', label: 'Core service 3' },
  { key: 'srv4', label: 'Core service 4' },
  { key: 'srv5', label: 'Core service 5' },
  { key: 'srv6', label: 'Core service 6' },
  { key: 'srv7', label: 'Core service 7' },
  { key: 'h5_bold', label: 'Languages — bold part' },
  { key: 'h5_desc', label: 'Languages — description' },
  { key: 'h6_title', label: 'Language pairs — title' },
  { key: 'h4_bold', label: 'Domain expertise — bold part' },
  { key: 'h4_desc', label: 'Domain expertise — description' },
  { key: 'h7_bold', label: 'CAT tools — bold part' },
  { key: 'h7_desc', label: 'CAT tools — description' },
  { key: 'h9_bold', label: 'Professional commitment — bold part' },
  { key: 'h9_desc', label: 'Professional commitment — description' },
  { key: 'outro', label: 'Closing paragraph', multiline: true },
  { key: 'downloadResume', label: 'Download resume button label' },
  { key: 'downloadCV', label: 'Download CV button label' },
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
