const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');
  
  // Update nav.work for hi
  await SiteContent.updateOne(
    { section: 'nav', key: 'work' },
    { $set: { "values.hi": "कार्य" } }
  );

  // Update work.title for hi
  await SiteContent.updateOne(
    { section: 'work', key: 'title' },
    { $set: { "values.hi": "कार्य" } }
  );

  // Update footer.workBy for hi
  await SiteContent.updateOne(
    { section: 'footer', key: 'workBy' },
    { $set: { "values.hi": "मुग्धा द्वारा कार्य।" } }
  );

  // Update footer.workBy for mr
  await SiteContent.updateOne(
    { section: 'footer', key: 'workBy' },
    { $set: { "values.mr": "मुग्धा यांचे कार्य." } }
  );
  
  console.log('Updated DB content.');
  await mongoose.disconnect();
}

main().catch(console.error);
