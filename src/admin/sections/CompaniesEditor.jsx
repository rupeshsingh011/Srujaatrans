import React, { useEffect, useState } from 'react';
import { adminFetch } from '../../context/AdminAuthContext.jsx';
import { useSiteContent } from '../../context/SiteContentContext.jsx';
import LanguageField from '../LanguageField.jsx';
import ImageUploader from '../ImageUploader.jsx';
import { resources as i18nFallback } from '../../i18n.js';

const TEXT_FIELDS = [
  { key: 'title', label: 'Section label (small caption)' },
  { key: 'heading', label: 'Heading' },
  { key: 'c1Title', label: 'Company 1 — name' },
  { key: 'c1Desc', label: 'Company 1 — description' },
  { key: 'c2Title', label: 'Company 2 — name' },
  { key: 'c2Desc', label: 'Company 2 — description' },
  { key: 'viewProfile', label: '"View Profile" link text' },
];

// Companies has two logos that live outside the translated-text system
// (they're plain /public files today), so it gets its own small editor
// that combines LanguageField text with two ImageUploaders.
export default function CompaniesEditor() {
  const { textContent, reload } = useSiteContent();
  const [values, setValues] = useState({});
  const [logo1, setLogo1] = useState('/logo_proz.png');
  const [logo2, setLogo2] = useState('/logo_tc.png');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const seeded = {};
    for (const field of TEXT_FIELDS) {
      const dbValue = textContent?.companies?.[field.key];
      seeded[field.key] = dbValue || {
        en: i18nFallback.en?.translation?.companies?.[field.key] || '',
        mr: i18nFallback.mr?.translation?.companies?.[field.key] || '',
        hi: i18nFallback.hi?.translation?.companies?.[field.key] || '',
        de: i18nFallback.de?.translation?.companies?.[field.key] || '',
      };
    }
    setValues(seeded);
    setLogo1(textContent?.companies?.logo1Url?.en || '/logo_proz.png');
    setLogo2(textContent?.companies?.logo2Url?.en || '/logo_tc.png');
  }, [textContent]);

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      await adminFetch('/api/site-content/companies', {
        method: 'PUT',
        body: JSON.stringify({
          ...values,
          logo1Url: { en: logo1, mr: logo1, hi: logo1, de: logo1 },
          logo2Url: { en: logo2, mr: logo2, hi: logo2, de: logo2 },
        }),
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
      <h1>Companies Section</h1>
      <p className="admin-subtitle">Associations shown on the home page, with logos.</p>
      {status && (
        <div className={status.type === 'success' ? 'admin-success' : 'admin-error'}>
          {status.message}
        </div>
      )}
      <div className="admin-card">
        <h3>Company 1</h3>
        <ImageUploader label="Logo" value={logo1} onChange={setLogo1} />
        {TEXT_FIELDS.filter((f) => f.key.startsWith('c1')).map((field) => (
          <LanguageField
            key={field.key}
            label={field.label}
            value={values[field.key]}
            onChange={(v) => setValues((prev) => ({ ...prev, [field.key]: v }))}
          />
        ))}
      </div>
      <div className="admin-card">
        <h3>Company 2</h3>
        <ImageUploader label="Logo" value={logo2} onChange={setLogo2} />
        {TEXT_FIELDS.filter((f) => f.key.startsWith('c2')).map((field) => (
          <LanguageField
            key={field.key}
            label={field.label}
            value={values[field.key]}
            onChange={(v) => setValues((prev) => ({ ...prev, [field.key]: v }))}
          />
        ))}
      </div>
      <div className="admin-card">
        <h3>General</h3>
        {TEXT_FIELDS.filter((f) => !f.key.startsWith('c1') && !f.key.startsWith('c2')).map((field) => (
          <LanguageField
            key={field.key}
            label={field.label}
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
