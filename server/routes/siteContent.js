const express = require('express');
const SiteContent = require('../models/SiteContent');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Public: fetch all content grouped by section -> key -> {en, mr, hi, de}
// Shape mirrors the old i18n.js resources object so the frontend can drop
// straight into the same t()-like lookups.
router.get('/', async (req, res) => {
  try {
    const items = await SiteContent.find({});
    const grouped = {};
    for (const item of items) {
      if (!grouped[item.section]) grouped[item.section] = {};
      grouped[item.section][item.key] = item.values;
    }
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load site content.' });
  }
});

// Admin: upsert one key's translations within a section.
router.put('/:section/:key', requireAdmin, async (req, res) => {
  try {
    const { section, key } = req.params;
    const { en = '', mr = '', hi = '', de = '' } = req.body || {};

    const updated = await SiteContent.findOneAndUpdate(
      { section, key },
      { $set: { values: { en, mr, hi, de } } },
      { new: true, upsert: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save content.' });
  }
});

// Admin: bulk upsert every key in a section at once (convenient for the
// admin panel's per-section save button).
router.put('/:section', requireAdmin, async (req, res) => {
  try {
    const { section } = req.params;
    const fields = req.body || {};

    const ops = Object.entries(fields).map(([key, values]) => ({
      updateOne: {
        filter: { section, key },
        update: {
          $set: {
            values: {
              en: values.en || '',
              mr: values.mr || '',
              hi: values.hi || '',
              de: values.de || '',
            },
          },
        },
        upsert: true,
      },
    }));

    if (ops.length > 0) {
      await SiteContent.bulkWrite(ops);
    }

    const items = await SiteContent.find({ section });
    const result = {};
    for (const item of items) result[item.key] = item.values;
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save section.' });
  }
});

module.exports = router;
