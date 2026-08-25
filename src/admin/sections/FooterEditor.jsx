import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Banner title' },
  { key: 'desc', label: 'Banner description', multiline: true },
  { key: 'contactUsButton', label: '"Contact Us" button label' },
  { key: 'heading', label: 'Phone card label' },
  { key: 'copyright', label: 'Copyright line' },
  { key: 'workBy', label: '"Work by" line' },
  { key: 'phone', label: 'Phone number (shown + used for tel: / WhatsApp links)' },
  { key: 'email', label: 'Contact email address' },
];

export default function FooterEditor() {
  return (
    <SectionEditor
      section="footer"
      title="Footer & Contact Details"
      description="Footer banner text plus the phone/email shown site-wide."
      fields={fields}
    />
  );
}
