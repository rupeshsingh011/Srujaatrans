const mongoose = require('mongoose');

const workItemSchema = new mongoose.Schema(
  {
    title: {
      en: { type: String, default: '' },
      mr: { type: String, default: '' },
      hi: { type: String, default: '' },
      de: { type: String, default: '' },
    },
    image: { type: String, default: '' }, // served file URL
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('WorkItem', workItemSchema);
