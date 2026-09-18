const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  const deTagline = 'Sprachen verbinden, Kulturen <span class="tagline-underline">vereinen.</span>';

  await SiteContent.updateOne(
    { section: 'hero', key: 'tagline' },
    { $set: { "values.de": deTagline } },
    { upsert: true }
  );
  
  console.log('Updated DE hero tagline.');
  await mongoose.disconnect();
}

main().catch(console.error);
