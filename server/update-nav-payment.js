const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'nav', key: 'payment' },
    { $set: { 
        "values.en": "Payment",
        "values.hi": "भुगतान",
        "values.mr": "पेमेंट",
        "values.de": "Zahlung",
      } 
    },
    { upsert: true }
  );

  console.log('Updated nav payment text.');
  await mongoose.disconnect();
}

main().catch(console.error);
