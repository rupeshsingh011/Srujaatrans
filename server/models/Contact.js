const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  "Full Name": { type: String, required: true },
  "Email": { type: String, required: true },
  "Phone": { type: String },
  "Send Message": { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
