import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'work', label: 'Work' },
  { key: 'services', label: 'Services' },
  { key: 'experience', label: 'Experience' },
  { key: 'skills', label: 'Skills' },
  { key: 'reviews', label: 'Reviews' },
  { key: 'contact', label: 'Contact button label' },
];

export default function NavbarEditor() {
  return (
    <SectionEditor
      section="nav"
      title="Navbar Labels"
      description="Menu link labels shown in the top navigation bar."
      fields={fields}
    />
  );
}
