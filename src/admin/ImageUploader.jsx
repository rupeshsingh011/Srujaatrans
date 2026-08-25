import React, { useState } from 'react';
import { adminFetch } from '../context/AdminAuthContext.jsx';

// Uploads a single image to the server and reports the resulting URL back
// to the parent via onChange. Shows a live preview of whatever URL is set.
export default function ImageUploader({ value, onChange, label }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('image', file);
      const data = await adminFetch('/api/upload', { method: 'POST', body: formData });
      onChange(data.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="admin-field">
      {label && <label>{label}</label>}
      {value ? <img src={value} alt="" className="admin-image-preview" /> : null}
      <input type="file" accept="image/*" onChange={handleFile} disabled={uploading} />
      {uploading && <span style={{ fontSize: '0.8rem', color: '#666' }}> Uploading…</span>}
      {error && <div className="admin-error" style={{ marginTop: '0.5rem' }}>{error}</div>}
    </div>
  );
}
