const express = require('express');
const { requireAdmin } = require('../middleware/auth');

// Builds a standard public-read / admin-write CRUD router for a Mongoose
// model that represents an ordered list (Review, WorkItem, Certification,
// Skill). Keeps the four nearly-identical route sets in one place.
function makeListRouter(Model) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const items = await Model.find({}).sort({ order: 1, createdAt: 1 });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: 'Failed to load items.' });
    }
  });

  router.post('/', requireAdmin, async (req, res) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message || 'Failed to create item.' });
    }
  });

  router.put('/:id', requireAdmin, async (req, res) => {
    try {
      const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!item) return res.status(404).json({ error: 'Item not found.' });
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message || 'Failed to update item.' });
    }
  });

  router.delete('/:id', requireAdmin, async (req, res) => {
    try {
      const item = await Model.findByIdAndDelete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Item not found.' });
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete item.' });
    }
  });

  return router;
}

module.exports = makeListRouter;
