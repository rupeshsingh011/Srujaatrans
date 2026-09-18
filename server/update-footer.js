const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');
  
  await SiteContent.updateOne(
    { section: 'footer', key: 'title' },
    { $set: { "values.en": "Let's Bridge Languages and Cultures<br/>with Accurate, Professional<br/>Translation." } }
  );
  
  console.log('Updated footer title in DB.');
  await mongoose.disconnect();
}

main().catch(console.error);
