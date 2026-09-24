const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'nav', key: 'about' },
    { $set: { 
        "values.en": "About me",
        "values.hi": "मेरे बारे में",
        // mr and de were already translated properly to "About me" equivalents but updating them just to be safe in case they were altered.
        "values.mr": "माझ्याबद्दल",
        "values.de": "Über mich",
      } 
    }
  );

  console.log('Updated nav about to About me.');
  await mongoose.disconnect();
}

main().catch(console.error);
