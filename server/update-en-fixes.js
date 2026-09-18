const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'about', key: 'stat1Label' },
    { $set: { "values.en": "Language Service Provider" } },
    { upsert: true }
  );

  await SiteContent.updateOne(
    { section: 'work', key: 'title' },
    { $set: { "values.en": "Books I Translated" } },
    { upsert: true }
  );

  console.log('Updated EN overrides in DB.');
  await mongoose.disconnect();
}

main().catch(console.error);
