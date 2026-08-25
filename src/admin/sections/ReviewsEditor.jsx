import React from 'react';
import ListEditor from '../ListEditor.jsx';

const fields = [
  { key: 'image', label: 'Photo', type: 'image' },
  { key: 'name', label: 'Reviewer Name', type: 'text' },
  { key: 'role', label: 'Role / Company', type: 'translated' },
  { key: 'text', label: 'Testimonial', type: 'translated' },
];

const emptyItem = {
  name: '',
  role: { en: '', mr: '', hi: '', de: '' },
  text: { en: '', mr: '', hi: '', de: '' },
  image: '',
  order: 0,
};

export default function ReviewsEditor() {
  return (
    <ListEditor
      listKey="reviews"
      endpoint="/api/reviews"
      title="Reviews"
      description="Testimonials shown in the marquee on the home page."
      fields={fields}
      emptyItem={emptyItem}
    />
  );
}
