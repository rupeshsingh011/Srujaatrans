const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');
  
  // Remove the <br/> after Untertitelung
  const deDescription = "Hallo, ich bin eine zertifizierte Übersetzerin mit über 14 Jahren Erfahrung, die präzise mehrsprachige Übersetzungen, Lektorat, Untertitelung und Lokalisierung für globale <br/>Kunden liefert.";

  await SiteContent.updateOne(
    { section: 'hero', key: 'description' },
    { $set: { "values.de": deDescription } }
  );
  
  console.log('Updated DE hero description.');
  await mongoose.disconnect();
}

main().catch(console.error);
