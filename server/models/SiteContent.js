const mongoose = require('mongoose');

// Generic key-value content store for simple text sections (hero, about,
// experience, services, companies, faq, nav, footer, contact labels, etc.)
// `section` groups keys together (e.g. "hero", "about").
// `key` is the field name within that section (e.g. "title", "h1_bold").
// `values` holds one translated string per language code.
const siteContentSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    key: { type: String, required: true },
    values: {
      en: { type: String, default: '' },
      mr: { type: String, default: '' },
      hi: { type: String, default: '' },
      de: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

siteContentSchema.index({ section: 1, key: 1 }, { unique: true });

module.exports = mongoose.model('SiteContent', siteContentSchema);
