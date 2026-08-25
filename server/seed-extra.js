// Seeds a few text fields that existed only as hardcoded JSX strings
// (not in src/i18n.js) before the CMS migration: footer/contact phone +
// email, and the two Companies section logo URLs. Safe to re-run.
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  await SiteContent.bulkWrite([
    {
      updateOne: {
        filter: { section: 'footer', key: 'phone' },
        update: {
          $setOnInsert: {
            section: 'footer',
            key: 'phone',
            values: { en: '+91 9850994406', mr: '+91 9850994406', hi: '+91 9850994406', de: '+91 9850994406' },
          },
        },
        upsert: true,
      },
    },
    {
      updateOne: {
        filter: { section: 'footer', key: 'email' },
        update: {
          $setOnInsert: {
            section: 'footer',
            key: 'email',
            values: { en: 'jobs@srujaatrans.com', mr: 'jobs@srujaatrans.com', hi: 'jobs@srujaatrans.com', de: 'jobs@srujaatrans.com' },
          },
        },
        upsert: true,
      },
    },
    {
      updateOne: {
        filter: { section: 'companies', key: 'logo1Url' },
        update: {
          $setOnInsert: {
            section: 'companies',
            key: 'logo1Url',
            values: { en: '/logo_proz.png', mr: '/logo_proz.png', hi: '/logo_proz.png', de: '/logo_proz.png' },
          },
        },
        upsert: true,
      },
    },
    {
      updateOne: {
        filter: { section: 'companies', key: 'logo2Url' },
        update: {
          $setOnInsert: {
            section: 'companies',
            key: 'logo2Url',
            values: { en: '/logo_tc.png', mr: '/logo_tc.png', hi: '/logo_tc.png', de: '/logo_tc.png' },
          },
        },
        upsert: true,
      },
    },
  ]);

  console.log('Seeded footer phone/email and companies logos.');
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
