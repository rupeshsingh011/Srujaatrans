import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Section label (small caption)' },
  { key: 'heading', label: 'Heading' },
  { key: 'q1', label: 'Question 1' },
  { key: 'a1', label: 'Answer 1', multiline: true },
  { key: 'q2', label: 'Question 2' },
  { key: 'a2', label: 'Answer 2', multiline: true },
  { key: 'q3', label: 'Question 3' },
  { key: 'a3', label: 'Answer 3', multiline: true },
  { key: 'q4', label: 'Question 4' },
  { key: 'a4', label: 'Answer 4', multiline: true },
  { key: 'q5', label: 'Question 5' },
  { key: 'a5', label: 'Answer 5', multiline: true },
];

export default function FaqEditor() {
  return (
    <SectionEditor
      section="faq"
      title="FAQ Section"
      description="Frequently asked questions shown on the home page."
      fields={fields}
    />
  );
}
