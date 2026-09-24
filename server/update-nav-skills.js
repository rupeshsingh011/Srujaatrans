const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'nav', key: 'skills' },
    { $set: { 
        "values.en": "My Tools",
        "values.hi": "मेरे उपकरण",
        "values.mr": "माझी साधने",
        "values.de": "Meine Werkzeuge",
      } 
    }
  );

  console.log('Updated nav skills to My Tools.');
  await mongoose.disconnect();
}

main().catch(console.error);
