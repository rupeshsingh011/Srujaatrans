import React from 'react';
import ListEditor from '../ListEditor.jsx';

const fields = [
  { key: 'image', label: 'Certificate Image', type: 'image' },
  { key: 'line1', label: 'Title — line 1', type: 'text' },
  { key: 'line2', label: 'Title — line 2', type: 'text' },
  { key: 'color', label: 'Icon color', type: 'color' },
];

const emptyItem = { line1: '', line2: '', color: '#6C5CE7', image: '', order: 0 };

export default function CertificationsEditor() {
  return (
    <ListEditor
      listKey="certifications"
      endpoint="/api/certifications"
      title="Certifications"
      description="Achievements grid shown on the home page."
      fields={fields}
      emptyItem={emptyItem}
    />
  );
}
