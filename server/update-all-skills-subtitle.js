const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  const enText = "I confidently work with leading CAT tools and continuously expand my expertise to ensure precision, quality, and adaptability.";
  const deText = "Ich arbeite sicher mit führenden CAT-Tools und erweitere kontinuierlich meine Fachkenntnisse, um Präzision, Qualität und Anpassungsfähigkeit zu gewährleisten.";
  const hiText = "मैं प्रमुख CAT टूल्स के साथ विश्वासपूर्वक काम करती हूँ और सटीकता, गुणवत्ता और अनुकूलन क्षमता सुनिश्चित करने के लिए लगातार अपनी विशेषज्ञता का विस्तार करती हूँ।";
  const mrText = "मी आघाडीच्या CAT टूल्ससोबत आत्मविश्वासाने काम करते आणि अचूकता, गुणवत्ता आणि अनुकूलनक्षमता सुनिश्चित करण्यासाठी माझ्या कौशल्यांचा सतत विस्तार करते.";

  await SiteContent.updateOne(
    { section: 'skills', key: 'subtitle' },
    { $set: { "values.en": enText, "values.de": deText, "values.hi": hiText, "values.mr": mrText } },
    { upsert: true }
  );

  console.log('Updated skills subtitle in DB for all languages.');
  await mongoose.disconnect();
}

main().catch(console.error);
