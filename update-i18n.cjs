const fs = require('fs');

let content = fs.readFileSync('src/i18n.js', 'utf8');

// Replace English services
content = content.replace(/services: {[\s\S]*?},/, `services: {
        title: "Services",
        heading: "My Prominent Project",
        s1Title: "ENG-MAR",
        s1Desc: "End Client: Google, Source-Target: ENG-MAR, Domain: Google Maps, Cat tool/Application: GTT, Word-Count: regular small drops...",
        s2Title: "ENG-HIN",
        s2Desc: "Project: Dictionary Creation, Source-Target: -ENG to HIN, Domain: Tourism, Cat tool/Application: MS Excel, Word-Count: 40000. Detail: Dictionary Creation for Tourism industry.",
        s3Title: "GER-ENG",
        s3Desc: "End Client: SAP, Source-Target: GER-ENG, Domain: IT, Word-Count: 70000",
        s4Title: "GER-HIN",
        s4Desc: "Other than these above mentioned projects, I have also worked for various agencies on freelance basis on various projects..."
      },
      companies: {
        title: "Companies",
        heading: "My Association",
        c1Title: "ProZ.com",
        c1Desc: "ProZ.com is home to the world’s largest translator network.",
        viewProfile: "View Profile →",
        c2Title: "TranslatorsCafé.com",
        c2Desc: "Directory of Translators, Interpreters and Translation Agencies!"
      },`);

// Replace English reviews
content = content.replace(/reviews: {[\s\S]*?},/, `reviews: {
        title: "Reviews",
        heading: "What Clients Say",
        r1Name: "Marta Esteban",
        r1Role: "Freelance translator and/or interpreter",
        r1Text: "“Everything went very well with Mugdha. She was willing to do last-minute changes and check the texts again once on line. Happy to collaborate with her”",
        r2Name: "Georgi Ivanov",
        r2Role: "Translation agency",
        r2Text: "“Mugdha is my personal Hindi and Marathi saviour! Always on time, always on point - highly recommend!”",
        r3Name: "elanguageworld",
        r3Role: "Freelance translator and/or interpreter",
        r3Text: "“Very professional and good quality services. Highly recommended !”",
        r4Name: "Saudisoft CO TA",
        r4Role: "Technical Agency",
        r4Text: "“she is very committed, really provides a very good quality.. and im definitely be willing to work with him again very soon.”",
        r5Name: "LC Services",
        r5Role: "LC Lingual Consultancy Services",
        r5Text: "“Highly Professional linguist with high quality and timely work. It has been great working experience with her and she is our preferred linguist for projects.”",
        r6Name: "Devdatta Patil",
        r6Role: "Fidel Softech Pvt.Ltd / FILOSE-Fidel Localization Services",
        r6Text: "“Srujaa is hardworking, committed & has delivered requested translations with the given deadline, especially for our German to English translations. She is proactive, responsive and focused on delivering quality output.”",
        r7Name: "iConic Translation World Pvt Ltd",
        r7Role: "Translation Agecy",
        r7Text: "“Excellent translator..!Srujaa is 100% reliable, Punctual and friendly. would definitely work with her forever.”",
        r8Name: "Tradoon",
        r8Role: "Tradoon translation services",
        r8Text: "“Accurate, Disciplined, Deadline conscious and never dissapointed with quality, always on time.., one of the best translators !!!”",
        r9Name: "Alex Denver",
        r9Role: "Quills Linguistics",
        r9Text: "“Excellent translator to work with. Highly recommended!”",
        r10Name: "vokian_inc",
        r10Role: "Vokian Localization",
        r10Text: "“Very professional and reliable! Always meets our expectations and deliver quality work..”"
      },`);

// Replace Marathi services
content = content.replace(/services: {[\s\S]*?},/, `services: {
        title: "सेवा",
        heading: "माझे प्रमुख प्रकल्प",
        s1Title: "इंग्रजी-मराठी",
        s1Desc: "अंतिम ग्राहक: Google, स्त्रोत-लक्ष्य: ENG-MAR, डोमेन: Google नकाशे, कॅट साधन/अॅप्लिकेशन: GTT, शब्द-संख्या: नियमित लहान कामे...",
        s2Title: "इंग्रजी-हिंदी",
        s2Desc: "प्रकल्प: शब्दकोश निर्मिती, स्त्रोत-लक्ष्य: -ENG ते HIN, डोमेन: पर्यटन, कॅट साधन/अॅप्लिकेशन: MS Excel, शब्द-संख्या: ४००००. तपशील: पर्यटन उद्योगासाठी शब्दकोश निर्मिती.",
        s3Title: "जर्मन-इंग्रजी",
        s3Desc: "अंतिम ग्राहक: SAP, स्त्रोत-लक्ष्य: GER-ENG, डोमेन: IT, शब्द-संख्या: ७००००",
        s4Title: "जर्मन-हिंदी",
        s4Desc: "वर नमूद केलेल्या प्रकल्पांव्यतिरिक्त, मी विविध संस्थांसाठी फ्रीलान्स तत्त्वावर विविध प्रकल्पांवर काम केले आहे..."
      },
      companies: {
        title: "कंपन्या",
        heading: "माझी संघटना",
        c1Title: "ProZ.com",
        c1Desc: "ProZ.com जगातील सर्वात मोठ्या अनुवादक नेटवर्कचे घर आहे.",
        viewProfile: "प्रोफाइल पहा →",
        c2Title: "TranslatorsCafé.com",
        c2Desc: "अनुवादक, दुभाषी आणि अनुवाद संस्थांची निर्देशिका!"
      },`);

// Replace Marathi reviews
content = content.replace(/reviews: {[\s\S]*?},/, `reviews: {
        title: "पुनरावलोकने",
        heading: "ग्राहक काय म्हणतात",
        r1Name: "Marta Esteban",
        r1Role: "फ्रीलान्स अनुवादक आणि/किंवा दुभाषी",
        r1Text: "“मुग्धासोबत सर्व काही खूप चांगले झाले. ती शेवटच्या क्षणी बदल करण्यास आणि मजकूर पुन्हा ऑनलाइन तपासण्यास तयार होती. तिच्यासोबत सहयोग करण्यात आनंद झाला.”",
        r2Name: "Georgi Ivanov",
        r2Role: "अनुवाद संस्था",
        r2Text: "“मुग्धा माझी वैयक्तिक हिंदी आणि मराठी तारणहार आहे! नेहमी वेळेवर, नेहमी अचूक - नक्कीच शिफारस करेन!”",
        r3Name: "elanguageworld",
        r3Role: "फ्रीलान्स अनुवादक आणि/किंवा दुभाषी",
        r3Text: "“अत्यंत व्यावसायिक आणि उत्तम दर्जाच्या सेवा. नक्कीच शिफारस केली जाते!”",
        r4Name: "Saudisoft CO TA",
        r4Role: "तांत्रिक संस्था",
        r4Text: "“ती खूप वचनबद्ध आहे, खरोखर खूप चांगली गुणवत्ता प्रदान करते.. आणि मी नक्कीच तिच्यासोबत पुन्हा काम करण्यास तयार असेन.”",
        r5Name: "LC Services",
        r5Role: "LC भाषिक सल्लागार सेवा",
        r5Text: "“उच्च दर्जाचे आणि वेळेवर काम करणारी अत्यंत व्यावसायिक भाषाशास्त्रज्ञ. तिच्यासोबत काम करण्याचा अनुभव खूप चांगला होता आणि ती प्रकल्पांसाठी आमची पसंतीची भाषाशास्त्रज्ञ आहे.”",
        r6Name: "Devdatta Patil",
        r6Role: "Fidel Softech Pvt.Ltd / FILOSE-Fidel स्थानिकीकरण सेवा",
        r6Text: "“सृजा कष्टाळू, वचनबद्ध आहे आणि तिने दिलेल्या मुदतीत विनंती केलेले अनुवाद दिले आहेत, विशेषत: आमच्या जर्मन ते इंग्रजी अनुवादांसाठी. ती सक्रिय, प्रतिसाद देणारी आणि दर्जेदार आउटपुट देण्यावर लक्ष केंद्रित करते.”",
        r7Name: "iConic Translation World Pvt Ltd",
        r7Role: "अनुवाद संस्था",
        r7Text: "“उत्कृष्ट अनुवादक..! सृजा १००% विश्वासार्ह, वक्तशीर आणि मैत्रीपूर्ण आहे. तिच्यासोबत नक्कीच कायम काम करेन.”",
        r8Name: "Tradoon",
        r8Role: "Tradoon अनुवाद सेवा",
        r8Text: "“अचूक, शिस्तबद्ध, वेळेची जाणीव असणारी आणि गुणवत्तेबाबत कधीही निराश न करणारी, नेहमी वेळेवर.., सर्वोत्कृष्ट अनुवादकांपैकी एक!!!”",
        r9Name: "Alex Denver",
        r9Role: "Quills भाषाशास्त्र",
        r9Text: "“सोबत काम करण्यासाठी उत्कृष्ट अनुवादक. नक्कीच शिफारस केली जाते!”",
        r10Name: "vokian_inc",
        r10Role: "Vokian स्थानिकीकरण",
        r10Text: "“अत्यंत व्यावसायिक आणि विश्वासार्ह! नेहमी आमच्या अपेक्षा पूर्ण करते आणि दर्जेदार काम देते..”"
      },`);

// Replace German services
content = content.replace(/services: {[\s\S]*?},/, `services: {
        title: "Dienstleistungen",
        heading: "Mein herausragendes Projekt",
        s1Title: "ENG-MAR",
        s1Desc: "Endkunde: Google, Quelle-Ziel: ENG-MAR, Fachgebiet: Google Maps, CAT-Tool/Anwendung: GTT, Wortzahl: regelmäßige kleine Aufträge...",
        s2Title: "ENG-HIN",
        s2Desc: "Projekt: Wörterbucherstellung, Quelle-Ziel: -ENG nach HIN, Fachgebiet: Tourismus, CAT-Tool/Anwendung: MS Excel, Wortzahl: 40000. Detail: Wörterbucherstellung für die Tourismusbranche.",
        s3Title: "GER-ENG",
        s3Desc: "Endkunde: SAP, Quelle-Ziel: GER-ENG, Fachgebiet: IT, Wortzahl: 70000",
        s4Title: "GER-HIN",
        s4Desc: "Abgesehen von diesen oben genannten Projekten habe ich auch für verschiedene Agenturen auf freiberuflicher Basis an verschiedenen Projekten gearbeitet..."
      },
      companies: {
        title: "Unternehmen",
        heading: "Meine Vereinigung",
        c1Title: "ProZ.com",
        c1Desc: "ProZ.com ist die Heimat des weltweit größten Übersetzernetzwerks.",
        viewProfile: "Profil ansehen →",
        c2Title: "TranslatorsCafé.com",
        c2Desc: "Verzeichnis von Übersetzern, Dolmetschern und Übersetzungsbüros!"
      },`);

// Replace German reviews
content = content.replace(/reviews: {[\s\S]*?},/, `reviews: {
        title: "Bewertungen",
        heading: "Was Kunden sagen",
        r1Name: "Marta Esteban",
        r1Role: "Freiberufliche Übersetzerin und/oder Dolmetscherin",
        r1Text: "„Mit Mugdha lief alles sehr gut. Sie war bereit, Änderungen in letzter Minute vorzunehmen und die Texte online noch einmal zu überprüfen. Es war eine Freude, mit ihr zusammenzuarbeiten.“",
        r2Name: "Georgi Ivanov",
        r2Role: "Übersetzungsbüro",
        r2Text: "„Mugdha ist meine persönliche Hindi- und Marathi-Retterin! Immer pünktlich, immer auf den Punkt - sehr zu empfehlen!“",
        r3Name: "elanguageworld",
        r3Role: "Freiberufliche Übersetzerin und/oder Dolmetscherin",
        r3Text: "„Sehr professionelle und qualitativ hochwertige Dienstleistungen. Sehr zu empfehlen!“",
        r4Name: "Saudisoft CO TA",
        r4Role: "Technische Agentur",
        r4Text: "„Sie ist sehr engagiert, liefert wirklich eine sehr gute Qualität.. und ich bin definitiv bereit, sehr bald wieder mit ihr zusammenzuarbeiten.“",
        r5Name: "LC Services",
        r5Role: "LC Lingual Consultancy Services",
        r5Text: "„Hochprofessionelle Linguistin mit qualitativ hochwertiger und pünktlicher Arbeit. Es war eine großartige Arbeitserfahrung mit ihr und sie ist unsere bevorzugte Linguistin für Projekte.“",
        r6Name: "Devdatta Patil",
        r6Role: "Fidel Softech Pvt.Ltd / FILOSE-Fidel Localization Services",
        r6Text: "„Srujaa ist fleißig, engagiert und hat die angeforderten Übersetzungen fristgerecht geliefert, insbesondere für unsere Deutsch-Englisch-Übersetzungen. Sie ist proaktiv, reaktionsschnell und auf qualitativ hochwertige Ergebnisse fokussiert.“",
        r7Name: "iConic Translation World Pvt Ltd",
        r7Role: "Übersetzungsbüro",
        r7Text: "„Ausgezeichnete Übersetzerin..! Srujaa ist zu 100% zuverlässig, pünktlich und freundlich. Würde definitiv für immer mit ihr zusammenarbeiten.“",
        r8Name: "Tradoon",
        r8Role: "Tradoon Übersetzungsdienste",
        r8Text: "„Präzise, diszipliniert, termingerecht und nie enttäuschend in der Qualität, immer pünktlich.., eine der besten Übersetzerinnen!!!“",
        r9Name: "Alex Denver",
        r9Role: "Quills Linguistics",
        r9Text: "„Ausgezeichnete Übersetzerin für die Zusammenarbeit. Sehr zu empfehlen!“",
        r10Name: "vokian_inc",
        r10Role: "Vokian Localization",
        r10Text: "„Sehr professionell und zuverlässig! Erfüllt immer unsere Erwartungen und liefert qualitativ hochwertige Arbeit..“"
      },`);

fs.writeFileSync('src/i18n.js', content, 'utf8');
console.log('Successfully updated i18n.js');
