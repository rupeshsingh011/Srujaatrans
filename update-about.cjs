const fs = require('fs');

let content = fs.readFileSync('src/i18n.js', 'utf8');

// Replace Marathi P1 & P2
content = content.replace(
  /p1: "स्वागत आहे! मी प्रमाणित अनुवादक, संपादक आणि सॉफ्टवेअर टेस्टर आहे\.\.\.",\s*p2: "इंडस्ट्री-लीडिंग कॅट टूल्स वापरून\.\.\.",/,
  `p1: "स्वागत आहे! मी एक प्रमाणित अनुवादक, संपादक, ट्रान्सक्रायबर, सबटायटलर आणि सॉफ्टवेअर टेस्टर आहे, ज्यांना १४+ वर्षांचा व्यावसायिक अनुभव आहे आणि मी जगभरातील ग्राहकांसाठी अचूक, सांस्कृतिकदृष्ट्या संबंधित भाषा उपाय प्रदान करते. मी ४०+ जागतिक भाषा सेवा प्रदात्यांसोबत (LSPs) सहयोग केला आहे आणि तांत्रिक, आयटी, वैद्यकीय, शिक्षण, कायदा, विमा आणि व्यवसाय या क्षेत्रांमध्ये २ कोटींहून अधिक शब्दांचे यशस्वीरित्या भाषांतर केले आहे. मराठी, हिंदी आणि इंग्रजीमध्ये अस्खलित असलेल्या मी इंग्रजी ↔ मराठी, जर्मन ↔ इंग्रजी, हिंदी ↔ इंग्रजी, जर्मन ↔ हिंदी आणि जर्मन ↔ मराठी भाषा जोड्यांमध्ये विशेष प्राविण्य मिळवले आहे.",
        p2: "SDL Trados Studio, MemoQ, Wordfast, Across, Passolo, Phrase आणि Subtitle Edit यासह उद्योग-अग्रणी CAT साधनांचा वापर करून, मी सातत्य, कार्यक्षमता आणि अपवादात्मक गुणवत्ता सुनिश्चित करते. माझे कौशल्य भाषांतर, संपादन, प्रुफरीडिंग, स्थानिकीकरण, सबटायटलिंग, लिप्यंतरण, भाषिक गुणवत्ता हमी (LQA) आणि सॉफ्टवेअर चाचणी यामध्ये आहे. अचूकता, गोपनीयता, विश्वासार्हता आणि वेळेवर वितरणासाठी वचनबद्ध राहून, मी असे सानुकूलित भाषा उपाय प्रदान करते जे व्यवसायांना विविध भाषा आणि संस्कृतींमध्ये प्रभावीपणे संवाद साधण्यास मदत करतात.",`
);

// Replace German P1 & P2
content = content.replace(
  /p1: "Willkommen! Ich bin zertifizierte Übersetzerin, Redakteurin und Softwaretesterin\.\.\.",\s*p2: "Mit branchenführenden CAT-Tools\.\.\.",/,
  `p1: "Willkommen! Ich bin eine zertifizierte Übersetzerin, Redakteurin, Transkriptorin, Untertitlerin und Software-Testerin mit über 14 Jahren Berufserfahrung in der Bereitstellung genauer, kulturell relevanter Sprachlösungen für Kunden weltweit. Ich habe mit über 40 globalen Sprachdienstleistern (LSPs) zusammengearbeitet und erfolgreich mehr als 20 Millionen Wörter in den Bereichen Technik, IT, Medizin, Bildung, Recht, Versicherung und Wirtschaft übersetzt. Ich spreche fließend Marathi, Hindi und Englisch und bin spezialisiert auf die Sprachpaare Englisch ↔ Marathi, Deutsch ↔ Englisch, Hindi ↔ Englisch, Deutsch ↔ Hindi und Deutsch ↔ Marathi.",
        p2: "Unter Einsatz branchenführender CAT-Tools wie SDL Trados Studio, MemoQ, Wordfast, Across, Passolo, Phrase und Subtitle Edit sorge ich für Konsistenz, Effizienz und außergewöhnliche Qualität. Meine Expertise umfasst Übersetzung, Lektorat, Korrekturlesen, Lokalisierung, Untertitelung, Transkription, linguistische Qualitätssicherung (LQA) und Softwaretests. Mit meinem Engagement für Genauigkeit, Vertraulichkeit, Zuverlässigkeit und pünktliche Lieferung biete ich maßgeschneiderte Sprachlösungen an, die Unternehmen dabei helfen, über Sprachen und Kulturen hinweg effektiv zu kommunizieren.",`
);

fs.writeFileSync('src/i18n.js', content, 'utf8');
console.log('Successfully updated About section translations.');
