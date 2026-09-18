const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');
  
  await SiteContent.updateOne(
    { section: 'about', key: 'heading' },
    { $set: { "values.de": "Über mich" } }
  );
  
  console.log('Updated DE about heading.');
  await mongoose.disconnect();
}

main().catch(console.error);
