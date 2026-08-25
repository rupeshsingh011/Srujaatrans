import React, { useEffect, useState } from 'react';
import { adminFetch } from '../context/AdminAuthContext.jsx';
import { useSiteContent } from '../context/SiteContentContext.jsx';
import ImageUploader from './ImageUploader.jsx';
import LanguageField from './LanguageField.jsx';

// Generic add/edit/delete manager for one of the list-based collections
// (reviews, work items, certifications, skills). `fields` describes the
// editable properties of one item:
//   { key, label, type: 'text' | 'translated' | 'image' | 'color' }
// `listKey` picks which array out of useSiteContent().lists to render.
// `emptyItem` is the shape of a brand-new item before saving.
export default function ListEditor({ listKey, endpoint, title, description, fields, emptyItem, renderThumb }) {
  const { lists, reload } = useSiteContent();
  const items = lists[listKey] || [];
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);
  const [creating, setCreating] = useState(false);
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setEditingId(null);
    setDraft(null);
    setCreating(false);
  }, [listKey]);

  const startEdit = (item) => {
    setEditingId(item._id);
    setDraft({ ...item });
    setCreating(false);
  };

  const startCreate = () => {
    setDraft({ ...emptyItem });
    setEditingId('__new__');
    setCreating(true);
  };

  const cancel = () => {
    setEditingId(null);
    setDraft(null);
    setCreating(false);
  };

  const handleFieldChange = (key, value) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      if (creating) {
        await adminFetch(endpoint, { method: 'POST', body: JSON.stringify(draft) });
      } else {
        await adminFetch(`${endpoint}/${editingId}`, { method: 'PUT', body: JSON.stringify(draft) });
      }
      await reload();
      cancel();
      setStatus({ type: 'success', message: 'Saved successfully.' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item? This cannot be undone.')) return;
    setStatus(null);
    try {
      await adminFetch(`${endpoint}/${id}`, { method: 'DELETE' });
      await reload();
      setStatus({ type: 'success', message: 'Deleted.' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  return (
    <div>
      <div className="admin-toolbar">
        <div>
          <h1>{title}</h1>
          {description && <p className="admin-subtitle">{description}</p>}
        </div>
        {!draft && (
          <button className="admin-btn admin-btn-primary" onClick={startCreate}>
            + Add New
          </button>
        )}
      </div>

      {status && (
        <div className={status.type === 'success' ? 'admin-success' : 'admin-error'}>
          {status.message}
        </div>
      )}

      {draft && (
        <div className="admin-card">
          <h3>{creating ? 'New Item' : 'Edit Item'}</h3>
          {fields.map((field) => {
            if (field.type === 'image') {
              return (
                <ImageUploader
                  key={field.key}
                  label={field.label}
                  value={draft[field.key]}
                  onChange={(url) => handleFieldChange(field.key, url)}
                />
              );
            }
            if (field.type === 'translated') {
              return (
                <LanguageField
                  key={field.key}
                  label={field.label}
                  value={draft[field.key]}
                  onChange={(v) => handleFieldChange(field.key, v)}
                />
              );
            }
            if (field.type === 'color') {
              return (
                <div className="admin-field" key={field.key}>
                  <label>{field.label}</label>
                  <input
                    type="color"
                    value={draft[field.key] || '#6C5CE7'}
                    onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  />
                </div>
              );
            }
            return (
              <div className="admin-field" key={field.key}>
                <label>{field.label}</label>
                <input
                  value={draft[field.key] || ''}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                />
              </div>
            );
          })}
          <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : 'Save'}
          </button>{' '}
          <button className="admin-btn admin-btn-secondary" onClick={cancel}>
            Cancel
          </button>
        </div>
      )}

      {items.map((item) => (
        <div className="admin-list-item" key={item._id}>
          {renderThumb ? (
            renderThumb(item)
          ) : item.image ? (
            <img src={item.image} alt="" className="admin-list-item-thumb" />
          ) : null}
          <div className="admin-list-item-body">
            <strong>{item.name || item.title?.en || item.line1 || ''}</strong>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>
              {item.role?.en || item.line2 || ''}
            </div>
          </div>
          <div className="admin-list-item-actions">
            <button className="admin-btn admin-btn-secondary" onClick={() => startEdit(item)}>
              Edit
            </button>
            <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}

      {items.length === 0 && !draft && (
        <p style={{ color: '#888' }}>No items yet. Click "Add New" to create one.</p>
      )}
    </div>
  );
}
