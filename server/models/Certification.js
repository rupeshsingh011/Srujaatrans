const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema(
  {
    line1: { type: String, default: '' },
    line2: { type: String, default: '' },
    color: { type: String, default: '#6C5CE7' },
    image: { type: String, default: '' }, // served file URL
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Certification', certificationSchema);
