import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Section label (small caption)' },
  { key: 'heading', label: 'Heading' },
  { key: 's1Title', label: 'Project 1 — title' },
  { key: 's1Desc', label: 'Project 1 — description (supports <br/>)', multiline: true },
  { key: 's2Title', label: 'Project 2 — title' },
  { key: 's2Desc', label: 'Project 2 — description (supports <br/>)', multiline: true },
  { key: 's3Title', label: 'Project 3 — title' },
  { key: 's3Desc', label: 'Project 3 — description (supports <br/>)', multiline: true },
  { key: 's4Title', label: 'Project 4 — title' },
  { key: 's4Desc', label: 'Project 4 — description (supports <br/>)', multiline: true },
];

export default function ServicesEditor() {
  return (
    <SectionEditor
      section="services"
      title="Services Section"
      description="The 4 featured project cards on the home page."
      fields={fields}
    />
  );
}
