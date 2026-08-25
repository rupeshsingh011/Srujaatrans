import React from 'react';
import ListEditor from '../ListEditor.jsx';

const fields = [
  { key: 'image', label: 'Logo / Icon', type: 'image' },
  { key: 'name', label: 'Tool Name', type: 'text' },
];

const emptyItem = { name: '', image: '', order: 0 };

export default function SkillsEditor() {
  return (
    <ListEditor
      listKey="skills"
      endpoint="/api/skills"
      title="Skills / Tools"
      description="The CAT tools grid shown on the home page. Upload a logo for each tool."
      fields={fields}
      emptyItem={emptyItem}
    />
  );
}
