const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: {
      en: { type: String, default: '' },
      mr: { type: String, default: '' },
      hi: { type: String, default: '' },
      de: { type: String, default: '' },
    },
    text: {
      en: { type: String, default: '' },
      mr: { type: String, default: '' },
      hi: { type: String, default: '' },
      de: { type: String, default: '' },
    },
    image: { type: String, default: '' }, // served file URL, e.g. /uploads/xyz.jpg
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
