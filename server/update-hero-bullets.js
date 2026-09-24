const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const SiteContent = require('./models/SiteContent');

const enDesc = `<ul style="list-style-type: disc; padding-left: 20px; text-align: left; margin: 0; line-height: 1.6;">
  <li>Certified Translator with 14+ years of experience.</li>
  <li>Delivering accurate multilingual services like, translations, editing, proofreading, MTPE, Dub and Sub, DTP etc.</li>
  <li>My Pairs:
    <br/>&bull; English &lt;&gt; Hindi / Marathi
    <br/>&bull; German &lt;&gt; Hindi / English / Marathi
  </li>
</ul>`;

const hiDesc = `<ul style="list-style-type: disc; padding-left: 20px; text-align: left; margin: 0; line-height: 1.6;">
  <li>14+ वर्षों के अनुभव के साथ एक प्रमाणित अनुवादक।</li>
  <li>अनुवाद, संपादन, प्रूफरीडिंग, MTPE, डब और सबटाइटल्स, DTP आदि जैसी सटीक बहुभाषी सेवाएं प्रदान करना।</li>
  <li>मेरी भाषा जोड़ियाँ:
    <br/>&bull; अंग्रेज़ी &lt;&gt; हिंदी / मराठी
    <br/>&bull; जर्मन &lt;&gt; हिंदी / अंग्रेज़ी / मराठी
  </li>
</ul>`;

const mrDesc = `<ul style="list-style-type: disc; padding-left: 20px; text-align: left; margin: 0; line-height: 1.6;">
  <li>14+ वर्षांचा अनुभव असलेली प्रमाणित भाषांतरकार.</li>
  <li>भाषांतर, संपादन, प्रुफरीडिंग, MTPE, डबिंग आणि सबटायटलिंग, DTP इत्यादी अचूक बहुभाषिक सेवा प्रदान करणे.</li>
  <li>माझ्या भाषा जोड्या:
    <br/>&bull; इंग्रजी &lt;&gt; हिंदी / मराठी
    <br/>&bull; जर्मन &lt;&gt; हिंदी / इंग्रजी / मराठी
  </li>
</ul>`;

const deDesc = `<ul style="list-style-type: disc; padding-left: 20px; text-align: left; margin: 0; line-height: 1.6;">
  <li>Zertifizierte Übersetzerin mit über 14 Jahren Erfahrung.</li>
  <li>Bereitstellung präziser mehrsprachiger Dienstleistungen wie Übersetzung, Lektorat, Korrekturlesen, MTPE, Dub und Sub, DTP usw.</li>
  <li>Meine Sprachpaare:
    <br/>&bull; Englisch &lt;&gt; Hindi / Marathi
    <br/>&bull; Deutsch &lt;&gt; Hindi / Englisch / Marathi
  </li>
</ul>`;

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  await SiteContent.updateOne(
    { section: 'hero', key: 'description' },
    { $set: { 
        "values.en": enDesc,
        "values.hi": hiDesc,
        "values.mr": mrDesc,
        "values.de": deDesc,
      } 
    }
  );

  console.log('Updated hero description to bullet points.');
  await mongoose.disconnect();
}

main().catch(console.error);
