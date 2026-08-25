import React from 'react';
import ListEditor from '../ListEditor.jsx';

const fields = [
  { key: 'image', label: 'Cover Image / File', type: 'image' },
  { key: 'title', label: 'Title', type: 'translated' },
];

const emptyItem = {
  title: { en: '', mr: '', hi: '', de: '' },
  image: '',
  order: 0,
};

export default function WorkEditor() {
  return (
    <ListEditor
      listKey="workItems"
      endpoint="/api/work-items"
      title="Work Samples"
      description="The 'From My Desk' work items shown on the home page."
      fields={fields}
      emptyItem={emptyItem}
    />
  );
}
