// One-time migration script: copies the site's existing hardcoded text
// (from src/i18n.js) and list data (reviews, work items, certifications,
// skills — previously hardcoded in their React components) into MongoDB,
// so the admin panel has real content to start editing.
//
// Images referenced from public/ and src/assets/ are copied into
// server/uploads/ and given fresh served URLs.
//
// Run once with: node server/seed.js
// Safe to re-run — it upserts everything by a stable natural key.

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');

const SiteContent = require('./models/SiteContent');
const Review = require('./models/Review');
const WorkItem = require('./models/WorkItem');
const Certification = require('./models/Certification');
const Skill = require('./models/Skill');

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const ASSETS_DIR = path.join(ROOT, 'src', 'assets');
const UPLOAD_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// Copies a source file into server/uploads with a unique name and returns
// the URL the app should use to reference it. Returns null if the source
// file doesn't exist (keeps the seed script resilient to missing/renamed
// assets rather than crashing).
function copyToUploads(sourcePath, label) {
  if (!fs.existsSync(sourcePath)) {
    console.warn(`  ! Missing file, skipping: ${sourcePath}`);
    return '';
  }
  const ext = path.extname(sourcePath);
  const unique = crypto.randomBytes(8).toString('hex');
  const destName = `seed-${unique}${ext}`;
  fs.copyFileSync(sourcePath, path.join(UPLOAD_DIR, destName));
  console.log(`  ✓ ${label} -> /uploads/${destName}`);
  return `/uploads/${destName}`;
}

async function loadResources() {
  // Use dynamic import so the ESM `export const resources` from
  // src/i18n.js loads correctly regardless of Node's module interop.
  const mod = await import(path.join(ROOT, 'src', 'i18n.js'));
  return mod.resources;
}

async function seedTextContent(resources) {
  console.log('\nSeeding text content...');
  const langs = ['en', 'mr', 'hi', 'de'];
  const sections = Object.keys(resources.en.translation);

  const ops = [];
  for (const section of sections) {
    const keys = Object.keys(resources.en.translation[section]);
    for (const key of keys) {
      const values = {};
      for (const lang of langs) {
        values[lang] = resources[lang]?.translation?.[section]?.[key] || '';
      }
      ops.push({
        updateOne: {
          filter: { section, key },
          update: { $setOnInsert: { section, key, values } },
          upsert: true,
        },
      });
    }
  }

  if (ops.length) await SiteContent.bulkWrite(ops);
  console.log(`  ✓ ${ops.length} text fields seeded (existing values left untouched).`);
}

async function seedReviews() {
  console.log('\nSeeding reviews...');
  const count = await Review.countDocuments();
  if (count > 0) {
    console.log(`  Skipped — ${count} reviews already exist.`);
    return;
  }

  const data = [
    { name: 'Marta Esteban', file: 'Marta_Esteban.jpg', roleEn: 'Freelance translator and/or interpreter', textEn: '“Everything went very well with Mugdha. She was willing to do last-minute changes and check the texts again once on line. Happy to collaborate with her”' },
    { name: 'Georgi Ivanov', file: 'Georgi.png', roleEn: 'Translation agency', textEn: '“Mugdha is my personal Hindi and Marathi saviour! Always on time, always on point - highly recommend!”' },
    { name: 'elanguageworld', file: 'eLanguageWorld.png', roleEn: 'Freelance translator and/or interpreter', textEn: '“Very professional and good quality services. Highly recommended !”' },
    { name: 'Saudisoft CO TA', file: 'saudisoft.png', roleEn: 'Technical Agency', textEn: '“she is very committed, really provides a very good quality.. and im definitely be willing to work with him again very soon.”' },
    { name: 'LC Services', file: 'lc.jpg', roleEn: 'LC Lingual Consultancy Services', textEn: '“Highly Professional linguist with high quality and timely work. It has been great working experience with her and she is our preferred linguist for projects.”' },
    { name: 'Devdatta Patil', file: 'Devdatta.gif', roleEn: 'Fidel Softech Pvt.Ltd / FILOSE-Fidel Localization Services', textEn: '“Srujaa is hardworking, committed & has delivered requested translations with the given deadline, especially for our German to English translations. She is proactive, responsive and focused on delivering quality output.”' },
    { name: 'iConic Translation World Pvt Ltd', file: 'iconic.jpg', roleEn: 'Translation Agecy', textEn: '“Excellent translator..!Srujaa is 100% reliable, Punctual and friendly. would definitely work with her forever.”' },
    { name: 'Tradoon', file: 'tradoon.jpg', roleEn: 'Tradoon translation services', textEn: '“Accurate, Disciplined, Deadline conscious and never dissapointed with quality, always on time.., one of the best translators !!!”' },
    { name: 'Alex Denver', file: 'denver.jpg', roleEn: 'Quills Linguistics', textEn: '“Excellent translator to work with. Highly recommended!”' },
    { name: 'vokian_inc', file: 'vokian.jpg', roleEn: 'Vokian Localization', textEn: '“Very professional and reliable! Always meets our expectations and deliver quality work..”' },
    { name: 'Mohd. Zaman.(Multi Trans Media) Translations Agency', file: 'multitranmedia.png', roleEn: 'ProZ.com Blue Board MultiTransMedia', textEn: '“Very professional and reliable linguist. Excellent command of the target language, accurate terminology, and strong attention to detail. The work was delivered on time and required minimal revision. Highly recommended for future projects.”' },
    { name: 'Asif Khan', file: 'emc.jpg', roleEn: 'Project Manager | ENS Translate (ENS Pvt. Ltd.)', textEn: '“We have always appreciated the quality and professionalism of your work. Your translations have been accurate, well-aligned with the project requirements, and delivered within the agreed timelines. We have also found your communication and responsiveness to be very good throughout our collaboration. Overall, we are satisfied with your services and appreciate your commitment to maintaining quality standards.”' },
  ];

  const docs = data.map((r, i) => ({
    name: r.name,
    role: { en: r.roleEn, mr: r.roleEn, hi: r.roleEn, de: r.roleEn },
    text: { en: r.textEn, mr: r.textEn, hi: r.textEn, de: r.textEn },
    image: copyToUploads(path.join(ASSETS_DIR, r.file), r.name),
    order: i,
  }));

  await Review.insertMany(docs);
  console.log(`  ✓ ${docs.length} reviews created.`);
}

async function seedWorkItems(resources) {
  console.log('\nSeeding work items...');
  const count = await WorkItem.countDocuments();
  if (count > 0) {
    console.log(`  Skipped — ${count} work items already exist.`);
    return;
  }

  const data = [
    { key: 'b1', file: '100 Great Inspiring Stories by G Francis Xavier_ENG.jpg' },
    { key: 'b2', file: 'Garma-garam-chivda_MAR.jpg' },
    { key: 'b3', file: 'Tales of Shakespeare_Charles and Merry Lamb_ENG.png' },
    { key: 'b4', file: 'Tales of Shakespeare_Charles and Merry Lamb_MAR.png' },
    { key: 'b5', file: 'The Little Black Book for Stunning Success_ENG.jpg' },
    { key: 'b6', file: 'The Little Black Book for Stunning Success_MAR.png' },
  ];

  const docs = data.map((item, i) => ({
    title: {
      en: resources.en.translation.work[item.key],
      mr: resources.mr.translation.work[item.key],
      hi: resources.hi.translation.work[item.key],
      de: resources.de.translation.work[item.key],
    },
    image: copyToUploads(path.join(PUBLIC_DIR, item.file), item.key),
    order: i,
  }));

  await WorkItem.insertMany(docs);
  console.log(`  ✓ ${docs.length} work items created.`);
}

async function seedCertifications() {
  console.log('\nSeeding certifications...');
  const count = await Certification.countDocuments();
  if (count > 0) {
    console.log(`  Skipped — ${count} certifications already exist.`);
    return;
  }

  const data = [
    { line1: 'AI Essentials for', line2: 'Project Managers', color: '#0277bd', file: 'AI Essentials for Project Managers_01.jpg' },
    { line1: 'AI for Business', line2: 'Operations', color: '#1565c0', file: 'AI for Business Operations_02.jpg' },
    { line1: 'AI Mastery', line2: 'Certificate Program', color: '#f5a623', file: 'AI Mastery Certifiate Program_03.jpg' },
    { line1: 'AI Mastery', line2: 'Certificate Program', color: '#9c27b0', file: 'AI Mastery Certificate Program_04.jpg' },
    { line1: 'AI Workflow', line2: 'Automation Program', color: '#009688', file: 'AI Workflow Automation Program_05.jpg' },
    { line1: 'Master of ChatGPT', line2: 'Certificate', color: '#10a37f', file: 'Master of ChatGPT Certificate_06.jpg' },
    { line1: 'Master of Claude', line2: 'Certificate', color: '#5e35b1', file: 'Master of Claude Certificate_07.jpg' },
    { line1: 'Master of Claude', line2: 'Code Certificate', color: '#4527a0', file: 'Master of Claude Code Certificate_08.jpg' },
    { line1: 'Master of Claude', line2: 'Deep Dive', color: '#3949ab', file: 'Master of Claude Deep Dive_09.jpg' },
    { line1: 'Master of Claude', line2: 'for Excel Certificate', color: '#107c41', file: 'Master of Claude for Excel Certificate_10.jpg' },
    { line1: 'Master of Gemini', line2: 'Certificate', color: '#4285f4', file: 'Master of Gemini Certificate_11.jpg' },
    { line1: 'Master of Jasper', line2: 'Certificate', color: '#e91e63', file: 'Master of Jasper Certificate_12.jpg' },
    { line1: 'Master of Lovable', line2: 'Certificate', color: '#e53935', file: 'Master of Lovable Certificate_13.jpg' },
    { line1: 'Master of Midjourney', line2: 'Certificate', color: '#ab47bc', file: 'Master of Midjourney Certificate_14.jpg' },
  ];

  const docs = data.map((c, i) => ({
    line1: c.line1,
    line2: c.line2,
    color: c.color,
    image: copyToUploads(path.join(PUBLIC_DIR, 'Certifications', c.file), c.line1),
    order: i,
  }));

  await Certification.insertMany(docs);
  console.log(`  ✓ ${docs.length} certifications created.`);
}

async function seedSkills() {
  console.log('\nSeeding skills...');
  const count = await Skill.countDocuments();
  if (count > 0) {
    console.log(`  Skipped — ${count} skills already exist.`);
    return;
  }

  const data = [
    { name: 'SDL Trados Studio', file: 'logo_sdl.png' },
    { name: 'Wordfast', file: null },
    { name: 'Translation Workspace', file: null },
    { name: 'InDesign', file: null },
    { name: 'Xbench', file: null },
    { name: 'Envelope', file: null },
    { name: 'Xliff Editor', file: null },
    { name: 'ISM, etc...', file: null },
    { name: 'Across', file: null },
    { name: 'MemoQ', file: 'logo_memoq.png' },
    { name: 'Coach', file: 'logo_coach.png' },
    { name: 'Phrase', file: 'logo_phrase.png' },
    { name: 'Matecat', file: 'logo_matecat.png' },
  ];

  const docs = data.map((s, i) => ({
    name: s.name,
    image: s.file ? copyToUploads(path.join(PUBLIC_DIR, s.file), s.name) : '',
    order: i,
  }));

  await Skill.insertMany(docs);
  console.log(`  ✓ ${docs.length} skills created.`);
}

async function main() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not set in server/.env — aborting.');
    process.exit(1);
  }

  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected.\n');

  const resources = await loadResources();

  await seedTextContent(resources);
  await seedReviews();
  await seedWorkItems(resources);
  await seedCertifications();
  await seedSkills();

  console.log('\nDone. Disconnecting.');
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
