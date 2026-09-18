const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'reviews', key: 'subtitle' },
    { $set: { "values.de": '„Hören Sie von Kunden, die Qualität, Genauigkeit und verlässliche Sprachkompetenz schätzen.“' } },
    { upsert: true }
  );

  console.log('Updated DE reviews subtitle in the DB.');
  await mongoose.disconnect();
}

main().catch(console.error);
