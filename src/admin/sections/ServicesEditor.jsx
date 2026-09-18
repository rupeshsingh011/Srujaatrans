import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Section Title' },
  { key: 'srv1', label: 'Service 1 — Title' },
  { key: 'srv1Desc', label: 'Service 1 — Description', multiline: true },
  { key: 'srv2', label: 'Service 2 — Title' },
  { key: 'srv2Desc', label: 'Service 2 — Description', multiline: true },
  { key: 'srv3', label: 'Service 3 — Title' },
  { key: 'srv3Desc', label: 'Service 3 — Description', multiline: true },
  { key: 'srv4', label: 'Service 4 — Title' },
  { key: 'srv4Desc', label: 'Service 4 — Description', multiline: true },
  { key: 'srv5', label: 'Service 5 — Title' },
  { key: 'srv5Desc', label: 'Service 5 — Description', multiline: true },
  { key: 'srv6', label: 'Service 6 — Title' },
  { key: 'srv6Desc', label: 'Service 6 — Description', multiline: true },
  { key: 'srv7', label: 'Service 7 — Title' },
  { key: 'srv7Desc', label: 'Service 7 — Description', multiline: true },
];

export default function ServicesEditor() {
  return (
    <SectionEditor
      section="services"
      title="Services Section"
      description="The main services listed on the home page."
      fields={fields}
    />
  );
}
