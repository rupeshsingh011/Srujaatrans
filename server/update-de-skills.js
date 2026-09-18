const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'skills', key: 'subtitle' },
    { $set: { "values.de": '„Branchenübliche Software und CAT‑Tools, die ich einsetze, um Präzision und Qualität sicherzustellen.“' } },
    { upsert: true }
  );

  console.log('Updated DE skills subtitle in the DB.');
  await mongoose.disconnect();
}

main().catch(console.error);
