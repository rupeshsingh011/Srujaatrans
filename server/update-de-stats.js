const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  const updates = [
    {
      section: 'about', key: 'languagesTitle',
      de: 'Meine Sprachen & Erfahrung'
    },
    {
      section: 'about', key: 'languagesList',
      de: '<li>Marathi – Muttersprache</li><li>Hindi – Mutterniveau</li><li>Englisch – Mutterniveau</li><li>Deutsch – Professionelles Niveau</li><li>Oriya – Fließend in der gesprochenen Sprache</li>'
    },
    {
      section: 'about', key: 'stat1Suffix',
      de: '+'
    },
    {
      section: 'about', key: 'stat1Label',
      de: 'Globale LSPs erfolgreich betreut'
    },
    {
      section: 'about', key: 'stat2Suffix',
      de: 'M+'
    },
    {
      section: 'about', key: 'stat2Label',
      de: 'Wörter übersetzt in verschiedenen Branchen'
    }
  ];

  for (const update of updates) {
    await SiteContent.updateOne(
      { section: update.section, key: update.key },
      { $set: { "values.de": update.de } },
      { upsert: true }
    );
  }

  console.log('Updated DE stats and languages list.');
  await mongoose.disconnect();
}

main().catch(console.error);
