import React, { useEffect, useState } from 'react';
import { adminFetch } from '../context/AdminAuthContext.jsx';
import { useSiteContent } from '../context/SiteContentContext.jsx';
import LanguageField from './LanguageField.jsx';
import { resources as i18nFallback } from '../i18n.js';

// Generic editor for a "section" of key-value translated text (hero, about,
// experience, services, companies, faq, footer, navbar, contact...).
// `fields` is an array of { key, label, multiline? } describing what to
// show and in what order; unlisted keys existing in i18n are ignored here
// on purpose to keep the admin UI focused on the meaningful fields.
export default function SectionEditor({ section, title, description, fields }) {
  const { textContent, reload } = useSiteContent();
  const [values, setValues] = useState({});
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null); // {type: 'success'|'error', message}

  useEffect(() => {
    const seeded = {};
    for (const field of fields) {
      const dbValue = textContent?.[section]?.[field.key];
      const fallback = i18nFallback.en?.translation?.[section]?.[field.key];
      seeded[field.key] = dbValue || {
        en: fallback || '',
        mr: i18nFallback.mr?.translation?.[section]?.[field.key] || '',
        hi: i18nFallback.hi?.translation?.[section]?.[field.key] || '',
        de: i18nFallback.de?.translation?.[section]?.[field.key] || '',
      };
    }
    setValues(seeded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, textContent]);

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      await adminFetch(`/api/site-content/${section}`, {
        method: 'PUT',
        body: JSON.stringify(values),
      });
      await reload();
      setStatus({ type: 'success', message: 'Saved successfully.' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      {description && <p className="admin-subtitle">{description}</p>}
      {status && (
        <div className={status.type === 'success' ? 'admin-success' : 'admin-error'}>
          {status.message}
        </div>
      )}
      <div className="admin-card">
        {fields.map((field) => (
          <LanguageField
            key={field.key}
            label={field.label}
            multiline={field.multiline}
            value={values[field.key]}
            onChange={(v) => setValues((prev) => ({ ...prev, [field.key]: v }))}
          />
        ))}
        <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
