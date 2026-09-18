const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  const updates = [
    { section: 'services', key: 'srv1', de: 'Übersetzung' },
    { section: 'services', key: 'srv1Desc', de: 'Präzise und kulturell relevante Übersetzungen in mehreren Sprachen.' },
    { section: 'services', key: 'srv2', de: 'Lektorat & Korrekturlesen' },
    { section: 'services', key: 'srv2Desc', de: 'Polierte, fehlerfreie Inhalte mit Klarheit, Konsistenz und Präzision.' },
    { section: 'services', key: 'srv3', de: 'Lokalisierung' },
    { section: 'services', key: 'srv3Desc', de: 'Anpassung Ihrer Inhalte an lokale Kulturen, Märkte und Zielgruppen.' },
    { section: 'services', key: 'srv4', de: 'Untertitelung' },
    { section: 'services', key: 'srv4Desc', de: 'Klare, zeitlich abgestimmte und ansprechende Untertitel für ein globales Publikum.' },
    { section: 'services', key: 'srv5', de: 'Transkription' },
    { section: 'services', key: 'srv5Desc', de: 'Exakte Transkription von Audio- und Videoinhalten mit Geschwindigkeit und Präzision.' },
    { section: 'services', key: 'srv6', de: 'Linguistische Qualitätssicherung (LQA)' },
    { section: 'services', key: 'srv6Desc', de: 'Sicherstellung sprachlicher Genauigkeit, Konsistenz und kultureller Relevanz in jedem Schritt.' },
    { section: 'services', key: 'srv7', de: 'Softwaretests' },
    { section: 'services', key: 'srv7Desc', de: 'Umfassende Tests für Funktionalität, Benutzerfreundlichkeit und ein nahtloses Nutzererlebnis.' }
  ];

  let count = 0;
  for (const update of updates) {
    await SiteContent.updateOne(
      { section: update.section, key: update.key },
      { $set: { "values.de": update.de } },
      { upsert: true }
    );
    count++;
  }

  console.log(`Updated ${count} DE services strings in the DB.`);
  await mongoose.disconnect();
}

main().catch(console.error);
