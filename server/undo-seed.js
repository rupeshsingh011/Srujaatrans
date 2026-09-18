const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  // Unset values.de for all documents to undo the bulk seed
  const result = await SiteContent.updateMany(
    {},
    { $unset: { "values.de": "" } }
  );
  console.log(`Unset values.de in ${result.modifiedCount} documents.`);

  await mongoose.disconnect();
}

main().catch(console.error);
