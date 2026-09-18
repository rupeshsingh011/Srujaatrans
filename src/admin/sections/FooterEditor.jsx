import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const footerFields = [
  { key: 'title', label: 'Banner Title (HTML allowed)' },
  { key: 'contact', label: 'Contact Column Heading' },
  { key: 'help', label: 'Help Column Heading' },
  { key: 'terms', label: 'Terms & Conditions Link' },
  { key: 'privacy', label: 'Privacy Policy Link' },
  { key: 'cookies', label: 'Cookies Link' },
  { key: 'payment', label: 'Payment Methods Link' },
  { key: 'shipping', label: 'Shipping & Returns Link' },
  { key: 'follow', label: 'Follow Column Heading' },
  { key: 'copyright', label: 'Copyright Text' },
  { key: 'workBy', label: 'Work By Text' },
  { key: 'disclaimer', label: 'Disclaimer Text', multiline: true },
  { key: 'phone', label: 'Phone number (shown + used for tel: links)' },
  { key: 'email', label: 'Contact email address' },
];

const contactFields = [
  { key: 'title', label: 'Contact Page Small Title' },
  { key: 'heading', label: 'Contact Page Main Heading' },
  { key: 'followUs', label: '"Follow us" label' },
  { key: 'fullName', label: 'Form: Full Name Label' },
  { key: 'enterName', label: 'Form: Enter Name Placeholder' },
  { key: 'email', label: 'Form: Email Label' },
  { key: 'enterEmail', label: 'Form: Enter Email Placeholder' },
  { key: 'phone', label: 'Form: Phone Label' },
  { key: 'enterPhone', label: 'Form: Enter Phone Placeholder' },
  { key: 'sendMessage', label: 'Form: Message Label' },
  { key: 'enterMessage', label: 'Form: Enter Message Placeholder' },
  { key: 'submit', label: 'Form: Submit Button' },
];

export default function FooterEditor() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <SectionEditor
        section="footer"
        title="Footer Section"
        description="Edit the content shown in the global website footer."
        fields={footerFields}
      />
      <SectionEditor
        section="contact"
        title="Contact Page"
        description="Edit the headings and form labels on the Contact Us page."
        fields={contactFields}
      />
    </div>
  );
}
