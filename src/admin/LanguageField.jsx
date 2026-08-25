import React, { useState } from 'react';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'mr', label: 'MR' },
  { code: 'hi', label: 'HI' },
  { code: 'de', label: 'DE' },
];

// One field, editable across all 4 languages via small tabs, so a section
// with many fields doesn't need 4x the vertical space.
export default function LanguageField({ label, value, onChange, multiline }) {
  const [activeLang, setActiveLang] = useState('en');
  const Field = multiline ? 'textarea' : 'input';

  return (
    <div className="admin-field">
      <label>{label}</label>
      <div className="admin-lang-tabs">
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            className={`admin-lang-tab ${activeLang === l.code ? 'active' : ''}`}
            onClick={() => setActiveLang(l.code)}
          >
            {l.label}
          </button>
        ))}
      </div>
      <Field
        value={value?.[activeLang] || ''}
        onChange={(e) => onChange({ ...value, [activeLang]: e.target.value })}
      />
    </div>
  );
}
