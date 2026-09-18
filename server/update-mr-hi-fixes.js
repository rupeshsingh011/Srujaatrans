const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'about', key: 'stat1Label' },
    { $set: { "values.mr": "भाषा सेवा प्रदाता", "values.hi": "भाषा सेवा प्रदाता" } },
    { upsert: true }
  );

  await SiteContent.updateOne(
    { section: 'work', key: 'title' },
    { $set: { "values.mr": "मी अनुवादित केलेली पुस्तके", "values.hi": "मेरे द्वारा अनुवादित पुस्तकें" } },
    { upsert: true }
  );

  console.log('Updated MR and HI overrides in DB.');
  await mongoose.disconnect();
}

main().catch(console.error);
