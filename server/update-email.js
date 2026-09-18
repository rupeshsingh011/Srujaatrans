const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');
  
  await SiteContent.updateOne(
    { section: 'footer', key: 'email' },
    { $set: { "values.en": "connect@srujaatrans.com", "values.mr": "connect@srujaatrans.com", "values.hi": "connect@srujaatrans.com", "values.de": "connect@srujaatrans.com" } }
  );
  
  console.log('Updated footer email in DB.');
  await mongoose.disconnect();
}

main().catch(console.error);
