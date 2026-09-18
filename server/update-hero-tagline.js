const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');
  
  const englishTagline = "Bridging Languages, Connecting <span class=\"tagline-underline\">Cultures.</span>";

  // Revert hero.tagline for MR
  await SiteContent.updateOne(
    { section: 'hero', key: 'tagline' },
    { $set: { "values.mr": englishTagline } }
  );

  // Revert hero.tagline for HI
  await SiteContent.updateOne(
    { section: 'hero', key: 'tagline' },
    { $set: { "values.hi": englishTagline } }
  );
  
  console.log('Reverted MR and HI tagline to English.');
  await mongoose.disconnect();
}

main().catch(console.error);
