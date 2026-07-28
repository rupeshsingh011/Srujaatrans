const fs = require('fs');

const i18nContent = `import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        work: "Work",
        services: "Services",
        experience: "Experience",
        skills: "Skills",
        reviews: "Reviews",
        contact: "Contact Me"
      },
      hero: {
        available: "Available for work",
        description: "Hie,I'm a Certified Translator with 14+ years of experience, <br/>delivering accurate multilingual translations, editing, subtitling, <br/>and localization for global <br/>clients.",
        years: "Years",
        ofExperience: "of experience",
        ctpDesc: "Certified Translation Professional",
        istqbDesc: "Certificate in Software Testing",
        prozDesc: "Translator working in the Language pair Marathi to English"
      },
      about: {
        title: "About",
        heading: "I work for you",
        subHeading: "Certified Translator & Localization Specialist",
        p1: "Welcome! I am a Certified Translator, Editor, Transcriber, Subtitler, and Software Tester with 14+ years of professional experience delivering accurate, culturally relevant language solutions for clients worldwide. I have collaborated with 40+ global Language Service Providers (LSPs) and successfully translated 20+ million words across Technical, IT, Medical, Education, Legal, Insurance, and Business domains. Fluent in Marathi, Hindi, and English, I specialize in English ↔ Marathi, German ↔ English, Hindi ↔ English, German ↔ Hindi, and German ↔ Marathi language pairs.",
        p2: "Using industry-leading CAT tools, including SDL Trados Studio, MemoQ, Wordfast, Across, Passolo, Phrase, and Subtitle Edit, I ensure consistency, efficiency, and exceptional quality. My expertise spans translation, editing, proofreading, localization, subtitling, transcription, linguistic quality assurance (LQA), and software testing. Committed to accuracy, confidentiality, reliability, and on-time delivery, I provide tailored language solutions that help businesses communicate effectively across languages and cultures.",
        downloadResume: "Download Resume",
        downloadCV: "Download BCV"
      },
      experience: {
        title: "Experience",
        heading: "My Info..",
        domainsTitle: "My Domains",
        domainsDesc: "Since 2009, I have handled various domains from SAP, IT, Business, Medical, ICF, Automobile, Android Apps, E-Learning, Etc. in all the languages. Also, I have helped Transcribe and transcreate various contents in all the languages. Being an avid reader coupled with my love for research and detail has helped me understand and develop my language skills to handle any domain with equal expertise.",
        languagesTitle: "My Languages",
        lang1: "Marathi – Mother tongue",
        lang2: "Hindi – Native level",
        lang3: "English – Native level",
        lang4: "German – Professional Level (B1.1 Certified (M2))",
        lang5: "Oriya – Fluent in speaking",
        educationTitle: "My Education",
        edu1: "Proz Certified Professional translator",
        edu2: "CTP Certified English – German Translator",
        edu3: "ISTQB certified; Year: 2010 (all certificates are attached in below pages)",
        edu4: "German Language Courses – Max Mueller Bhawan up to Level B1; Year: 1991",
        edu5: "B.COM, IGNOU, DELHI – Year of passing: 1998"
      },
      services: {
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
      },
      skills: {
        title: "My Skills",
        heading: "Tools I Use"
      },
      work: {
        title: "Work",
        heading: "My Selected Work",
        b1: "100 Great Inspiring Stories by G Francis Xavier (ENG)",
        b2: "Garma-garam-chivda (MAR)",
        b3: "Tales of Shakespeare: Charles and Merry Lamb (ENG)",
        b4: "Tales of Shakespeare: Charles and Merry Lamb (MAR)",
        b5: "The Little Black Book for Stunning Success (ENG)",
        b6: "The Little Black Book for Stunning Success (MAR)"
      },
      reviews: {
        title: "Reviews",
        heading: "What People Say",
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
      },
      contact: {
        title: "Contact US",
        heading: "Let's Connect",
        contactUs: "Contact us",
        email: "Email",
        followUs: "Follow us",
        fullName: "Full Name",
        enterName: "Enter your full name",
        enterEmail: "Enter your email",
        phone: "Phone",
        enterPhone: "Enter your phone number",
        sendMessage: "Send Message",
        enterMessage: "Enter your message...",
        submit: "Submit Now"
      },
      footer: {
        heading: "Contact us",
        contactUsButton: "Contact Us",
        title: "Let's Bridge Languages and Cultures with Accurate, Professional Translation.",
        desc: "I am available for new projects and collaborations, helping businesses communicate globally through precise translation, localization, editing, and linguistic quality assurance.",
        copyright: "© 2026 Srujaatrans",
        workBy: "Work by Mugdha."
      },
      faq: {
        title: "FAQ",
        heading: "Frequently Asked Questions",
        q1: "What services do you offer?",
        a1: "I provide professional translation, localization, editing, proofreading, transcription, subtitling, linguistic quality assurance (LQA), software testing, and multilingual content review. My expertise covers Technical, IT, Medical, Legal, Education, Insurance, Business, and Marketing content.",
        q2: "How do you approach a new project?",
        a2: "Every project begins with understanding your requirements, target audience, language pair, and deadline. I then select the most suitable CAT tools and workflow, ensuring accurate translation, cultural relevance, thorough quality checks, and timely delivery with clear communication throughout the project.",
        q3: "What tools do you use for Translation?",
        a3: "I use a wide range of CAT (Computer-Assisted Translation) tools, including SDL Trados Studio, MemoQ, Memsource, Wordfast, XTM Cloud, Smartcat, Crowdin, Lokalise, Phrase, and many others. The choice of tool depends on the project requirements and client preferences.",
        q4: "Do you offer ongoing support after the project is complete?",
        a4: "Yes. I provide post-delivery support, including revisions, updates, terminology maintenance, and assistance with future localization requirements to ensure your content remains accurate and consistent.",
        q5: "How long does it take to complete a project?",
        a5: "Project timelines depend on the content type, complexity, language pair, and word count. After reviewing your requirements, I provide a clear delivery schedule and ensure every project is completed with the highest quality and on time."
      }
    }
  },
  mr: {
    translation: {
      nav: {
        home: "मुख्यपृष्ठ",
        about: "माझ्याबद्दल",
        work: "काम",
        services: "सेवा",
        experience: "अनुभव",
        skills: "कौशल्ये",
        reviews: "पुनरावलोकने",
        contact: "संपर्क करा"
      },
      hero: {
        available: "कामासाठी उपलब्ध",
        description: "नमस्कार, मी १४+ वर्षांचा अनुभव असलेली प्रमाणित अनुवादक आहे, <br/>जी जागतिक ग्राहकांसाठी अचूक बहुभाषिक अनुवाद, संपादन, <br/>सबटायटलिंग आणि स्थानिकीकरण <br/>प्रदान करते.",
        years: "वर्षे",
        ofExperience: "अनुभव",
        ctpDesc: "प्रमाणित अनुवादक व्यावसायिक",
        istqbDesc: "सॉफ्टवेअर टेस्टिंगमधील प्रमाणपत्र",
        prozDesc: "मराठी ते इंग्रजी भाषा जोडीत काम करणारी अनुवादक"
      },
      about: {
        title: "माझ्याबद्दल",
        heading: "मी तुमच्यासाठी काम करते",
        subHeading: "प्रमाणित अनुवादक आणि स्थानिकीकरण तज्ञ",
        p1: "स्वागत आहे! मी एक प्रमाणित अनुवादक, संपादक, ट्रान्सक्रायबर, सबटायटलर आणि सॉफ्टवेअर टेस्टर आहे, ज्यांना १४+ वर्षांचा व्यावसायिक अनुभव आहे आणि मी जगभरातील ग्राहकांसाठी अचूक, सांस्कृतिकदृष्ट्या संबंधित भाषा उपाय प्रदान करते. मी ४०+ जागतिक भाषा सेवा प्रदात्यांसोबत (LSPs) सहयोग केला आहे आणि तांत्रिक, आयटी, वैद्यकीय, शिक्षण, कायदा, विमा आणि व्यवसाय या क्षेत्रांमध्ये २ कोटींहून अधिक शब्दांचे यशस्वीरित्या भाषांतर केले आहे. मराठी, हिंदी आणि इंग्रजीमध्ये अस्खलित असलेल्या मी इंग्रजी ↔ मराठी, जर्मन ↔ इंग्रजी, हिंदी ↔ इंग्रजी, जर्मन ↔ हिंदी आणि जर्मन ↔ मराठी भाषा जोड्यांमध्ये विशेष प्राविण्य मिळवले आहे.",
        p2: "SDL Trados Studio, MemoQ, Wordfast, Across, Passolo, Phrase आणि Subtitle Edit यासह उद्योग-अग्रणी CAT साधनांचा वापर करून, मी सातत्य, कार्यक्षमता आणि अपवादात्मक गुणवत्ता सुनिश्चित करते. माझे कौशल्य भाषांतर, संपादन, प्रुफरीडिंग, स्थानिकीकरण, सबटायटलिंग, लिप्यंतरण, भाषिक गुणवत्ता हमी (LQA) आणि सॉफ्टवेअर चाचणी यामध्ये आहे. अचूकता, गोपनीयता, विश्वासार्हता आणि वेळेवर वितरणासाठी वचनबद्ध राहून, मी असे सानुकूलित भाषा उपाय प्रदान करते जे व्यवसायांना विविध भाषा आणि संस्कृतींमध्ये प्रभावीपणे संवाद साधण्यास मदत करतात.",
        downloadResume: "रेझ्युमे डाउनलोड करा",
        downloadCV: "BCV डाउनलोड करा"
      },
      experience: {
        title: "अनुभव",
        heading: "माझी माहिती..",
        domainsTitle: "माझे डोमेन्स",
        domainsDesc: "२००९ पासून, मी सर्व भाषांमध्ये SAP, IT, व्यवसाय, वैद्यकीय, ICF, ऑटोमोबाईल, Android Apps, E-Learning इत्यादी विविध डोमेन्स हाताळले आहेत. तसेच, मी सर्व भाषांमध्ये विविध सामग्रीचे लिप्यंतरण आणि ट्रान्सक्रिएशन करण्यात मदत केली आहे. वाचनाची आवड आणि संशोधनाची आवड यामुळे मला कोणत्याही डोमेनमध्ये समान कौशल्याने काम करण्यासाठी माझ्या भाषा कौशल्यांचा विकास करण्यास मदत झाली आहे.",
        languagesTitle: "माझ्या भाषा",
        lang1: "मराठी – मातृभाषा",
        lang2: "हिंदी – मूळ पातळी",
        lang3: "इंग्रजी – मूळ पातळी",
        lang4: "जर्मन – व्यावसायिक पातळी",
        lang5: "उडिया – अस्खलित",
        educationTitle: "माझे शिक्षण",
        edu1: "Proz प्रमाणित व्यावसायिक अनुवादक",
        edu2: "CTP प्रमाणित इंग्रजी-जर्मन अनुवादक",
        edu3: "ISTQB प्रमाणित",
        edu4: "जर्मन भाषा अभ्यासक्रम",
        edu5: "बी.कॉम"
      },
      services: {
        title: "सेवा",
        heading: "माझे प्रमुख प्रकल्प",
        s1Title: "ENG-MAR",
        s1Desc: "अंतिम ग्राहक: Google, स्त्रोत-लक्ष्य: ENG-MAR, डोमेन: Google नकाशे, CAT साधन/अॅप्लिकेशन: GTT, शब्द-संख्या: नियमित लहान कामे...",
        s2Title: "ENG-HIN",
        s2Desc: "प्रकल्प: शब्दकोश निर्मिती, स्त्रोत-लक्ष्य: ENG ते HIN, डोमेन: पर्यटन, CAT साधन/अॅप्लिकेशन: MS Excel, शब्द-संख्या: ४००००. तपशील: पर्यटन उद्योगासाठी शब्दकोश निर्मिती.",
        s3Title: "GER-ENG",
        s3Desc: "अंतिम ग्राहक: SAP, स्त्रोत-लक्ष्य: GER-ENG, डोमेन: IT, शब्द-संख्या: ७००००",
        s4Title: "GER-HIN",
        s4Desc: "वर नमूद केलेल्या या प्रकल्पांव्यतिरिक्त, मी विविध संस्थांसाठी फ्रीलान्स तत्त्वावर विविध प्रकल्पांवर देखील काम केले आहे..."
      },
      companies: {
        title: "कंपन्या",
        heading: "माझी संघटना",
        c1Title: "ProZ.com",
        c1Desc: "ProZ.com जगातील सर्वात मोठ्या अनुवादक नेटवर्कचे घर आहे.",
        viewProfile: "प्रोफाइल पहा →",
        c2Title: "TranslatorsCafé.com",
        c2Desc: "अनुवादक, दुभाषी आणि अनुवाद संस्थांची निर्देशिका!"
      },
      skills: {
        title: "माझी कौशल्ये",
        heading: "मी वापरलेली साधने"
      },
      work: {
        title: "काम",
        heading: "माझे निवडक काम",
        b1: "जी. फ्रान्सिस झेवियर यांची प्रेरणादायी १०० महान कथा (ENG)",
        b2: "गरमा-गरम चिवडा (MAR)",
        b3: "शेक्सपिअरच्या कथा : चार्ल्स आणि मेरी लॅम्ब (ENG)",
        b4: "शेक्सपिअरच्या कथा : चार्ल्स आणि मेरी लॅम्ब (MAR)",
        b5: "असामान्य यशासाठीचे छोटे काळे पुस्तक (ENG)",
        b6: "असामान्य यशासाठीचे छोटे काळे पुस्तक (MAR)"
      },
      reviews: {
        title: "पुनरावलोकने",
        heading: "ग्राहक काय म्हणतात",
        r1Name: "मार्टा एस्तेबान",
        r1Role: "फ्रीलान्स अनुवादक आणि/किंवा दुभाषी",
        r1Text: "“मुग्धासोबत सर्व काही खूप चांगले झाले. ती शेवटच्या क्षणी बदल करण्यास आणि मजकूर पुन्हा ऑनलाइन तपासण्यासाठी तयार होती. तिच्यासोबत सहयोग करण्यात आनंद झाला”",
        r2Name: "जॉर्जी इव्हानोव्ह",
        r2Role: "अनुवाद संस्था",
        r2Text: "“मुग्धा माझी वैयक्तिक हिंदी आणि मराठी तारणहार आहे! नेहमी वेळेवर, नेहमी अचूक - नक्कीच शिफारस करतो!”",
        r3Name: "इलँग्वेजवर्ल्ड",
        r3Role: "फ्रीलान्स अनुवादक आणि/किंवा दुभाषी",
        r3Text: "“अत्यंत व्यावसायिक आणि उत्तम दर्जाच्या सेवा. नक्कीच शिफारस केली जाते!”",
        r4Name: "सौदीसॉफ्ट सीओ टीए",
        r4Role: "तांत्रिक संस्था",
        r4Text: "“ती खूप वचनबद्ध आहे, खरोखरच खूप चांगल्या दर्जाची सेवा देते.. आणि मी नक्कीच तिच्यासोबत लवकरच पुन्हा काम करण्यास तयार असेन.”",
        r5Name: "एलसी सेवा",
        r5Role: "एलसी भाषिक सल्लागार सेवा",
        r5Text: "“उच्च दर्जाचे आणि वेळेवर काम करणारी अत्यंत व्यावसायिक भाषाशास्त्रज्ञ. तिच्यासोबत काम करण्याचा उत्तम अनुभव राहिला आहे आणि ती प्रकल्पांसाठी आमची पसंतीची भाषाशास्त्रज्ञ आहे.”",
        r6Name: "देवदत्त पाटील",
        r6Role: "फिडेल सोफ्टेक प्रायव्हेट लिमिटेड / फिलोज-फिडेल लोकलायझेशन सर्व्हिसेस",
        r6Text: "“सृजा कष्टाळू, वचनबद्ध आहे आणि तिने दिलेल्या मुदतीत, विशेषत: आमच्या जर्मन ते इंग्रजी अनुवादांसाठी विनंती केलेले अनुवाद दिले आहेत. ती तत्पर आणि दर्जेदार आउटपुट देण्यावर लक्ष केंद्रित करते.”",
        r7Name: "आयकोनिक ट्रान्सलेशन वर्ल्ड प्रायव्हेट लिमिटेड",
        r7Role: "अनुवाद संस्था",
        r7Text: "“उत्कृष्ट अनुवादक..! सृजा १००% विश्वसनीय, वक्तशीर आणि मैत्रीपूर्ण आहे. नक्कीच तिच्यासोबत कायम काम करायला आवडेल.”",
        r8Name: "ट्रॅडुन",
        r8Role: "ट्रॅडुन अनुवाद सेवा",
        r8Text: "“अचूक, शिस्तबद्ध, वेळेची जाणीव असणारी आणि गुणवत्तेबाबत कधीही निराश न करणारी, नेहमी वेळेवर काम करणारी.., सर्वोत्तम अनुवादकांपैकी एक!!!”",
        r9Name: "अॅलेक्स डेन्व्हर",
        r9Role: "क्विल्स लिंग्विस्टिक्स",
        r9Text: "“सोबत काम करण्यासाठी उत्कृष्ट अनुवादक. नक्कीच शिफारस करतो!”",
        r10Name: "वोकियन_इंक",
        r10Role: "वोकियन लोकलायझेशन",
        r10Text: "“अत्यंत व्यावसायिक आणि विश्वासार्ह! नेहमी आमच्या अपेक्षा पूर्ण करते आणि दर्जेदार काम देते..”"
      },
      contact: {
        title: "आमच्याशी संपर्क साधा",
        heading: "चला कनेक्ट होऊया",
        contactUs: "संपर्क करा",
        email: "ईमेल",
        followUs: "आमचे अनुसरण करा",
        fullName: "पूर्ण नाव",
        enterName: "तुमचे नाव प्रविष्ट करा",
        enterEmail: "तुमचा ईमेल प्रविष्ट करा",
        phone: "फोन",
        enterPhone: "तुमचा फोन नंबर प्रविष्ट करा",
        sendMessage: "संदेश पाठवा",
        enterMessage: "तुमचा संदेश प्रविष्ट करा...",
        submit: "सबमिट करा"
      },
      footer: {
        heading: "आमच्याशी संपर्क साधा",
        contactUsButton: "संपर्क करा",
        title: "चला अचूक, व्यावसायिक अनुवादासह भाषा आणि संस्कृतींना जोडूया.",
        desc: "मी नवीन प्रकल्प आणि सहयोगांसाठी उपलब्ध आहे, अचूक भाषांतर, स्थानिकीकरण, संपादन आणि भाषिक गुणवत्ता हमीद्वारे व्यवसायांना जागतिक स्तरावर संवाद साधण्यास मदत करते.",
        copyright: "© 2026 Srujaatrans",
        workBy: "मुग्धा यांचे काम."
      },
      faq: {
        title: "सामान्य प्रश्न",
        heading: "वारंवार विचारले जाणारे प्रश्न",
        q1: "तुम्ही कोणत्या सेवा देता?",
        a1: "मी व्यावसायिक अनुवाद, स्थानिकीकरण, संपादन, प्रुफरीडिंग, लिप्यंतरण, सबटायटलिंग, भाषिक गुणवत्ता हमी (LQA), सॉफ्टवेअर चाचणी आणि बहुभाषिक सामग्री पुनरावलोकन प्रदान करते. माझ्या कौशल्यांमध्ये तांत्रिक, आयटी, वैद्यकीय, कायदेशीर, शिक्षण, विमा, व्यवसाय आणि विपणन सामग्री समाविष्ट आहे.",
        q2: "तुम्ही नवीन प्रकल्पाकडे कसे पाहता?",
        a2: "प्रत्येक प्रकल्प आपल्या आवश्यकता, लक्ष्य प्रेक्षक, भाषा जोडी आणि मुदत समजून घेण्यापासून सुरू होतो. त्यानंतर मी सर्वात योग्य CAT साधने आणि कार्यप्रवाह निवडते, संपूर्ण प्रकल्पामध्ये स्पष्ट संवादासह अचूक अनुवाद, सांस्कृतिक प्रासंगिकता, कसून गुणवत्ता तपासणी आणि वेळेवर वितरण सुनिश्चित करते.",
        q3: "अनुवादासाठी तुम्ही कोणती साधने वापरता?",
        a3: "मी SDL Trados Studio, MemoQ, Memsource, Wordfast, XTM Cloud, Smartcat, Crowdin, Lokalise, Phrase आणि इतर अनेक साधनांसह अनेक CAT साधनांचा वापर करते. साधनाची निवड प्रकल्पाच्या आवश्यकता आणि क्लायंटच्या पसंतींवर अवलंबून असते.",
        q4: "प्रकल्प पूर्ण झाल्यानंतर तुम्ही चालू समर्थन देता का?",
        a4: "होय. मी डिलिव्हरीनंतर समर्थन प्रदान करते, ज्यामध्ये आपली सामग्री अचूक आणि सुसंगत राहते याची खात्री करण्यासाठी पुनरावृत्ती, अद्यतने, शब्दावली देखभाल आणि भविष्यातील स्थानिकीकरण आवश्यकतांसह सहाय्य समाविष्ट आहे.",
        q5: "प्रकल्प पूर्ण होण्यास किती वेळ लागतो?",
        a5: "प्रकल्पाची वेळ सामग्री प्रकार, गुंतागुंत, भाषा जोडी आणि शब्द मोजणीवर अवलंबून असते. आपल्या आवश्यकतांचे पुनरावलोकन केल्यानंतर, मी स्पष्ट वितरण वेळापत्रक प्रदान करते आणि प्रत्येक प्रकल्प सर्वोच्च गुणवत्तेसह आणि वेळेवर पूर्ण होईल याची खात्री करते."
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        about: "Über mich",
        work: "Arbeit",
        services: "Dienste",
        experience: "Erfahrung",
        skills: "Fähigkeiten",
        reviews: "Bewertungen",
        contact: "Kontakt"
      },
      hero: {
        available: "Verfügbar für Arbeit",
        description: "Hallo, ich bin eine zertifizierte Übersetzerin mit über 14 Jahren Erfahrung,<br/>die präzise mehrsprachige Übersetzungen, Lektorat, Untertitelung <br/>und Lokalisierung für globale <br/>Kunden liefert.",
        years: "Jahre",
        ofExperience: "Erfahrung",
        ctpDesc: "Zertifizierter Übersetzungsprofi",
        istqbDesc: "Zertifikat in Softwaretests",
        prozDesc: "Übersetzerin in der Sprachkombination Marathi nach Englisch"
      },
      about: {
        title: "Über mich",
        heading: "Ich arbeite für Sie",
        subHeading: "Zertifizierter Übersetzer & Lokalisierungsexperte",
        p1: "Willkommen! Ich bin eine zertifizierte Übersetzerin, Redakteurin, Transkriptorin, Untertitlerin und Software-Testerin mit über 14 Jahren Berufserfahrung in der Bereitstellung genauer, kulturell relevanter Sprachlösungen für Kunden weltweit. Ich habe mit über 40 globalen Sprachdienstleistern (LSPs) zusammengearbeitet und erfolgreich mehr als 20 Millionen Wörter in den Bereichen Technik, IT, Medizin, Bildung, Recht, Versicherung und Wirtschaft übersetzt. Ich spreche fließend Marathi, Hindi und Englisch und bin spezialisiert auf die Sprachpaare Englisch ↔ Marathi, Deutsch ↔ Englisch, Hindi ↔ Englisch, Deutsch ↔ Hindi und Deutsch ↔ Marathi.",
        p2: "Unter Einsatz branchenführender CAT-Tools wie SDL Trados Studio, MemoQ, Wordfast, Across, Passolo, Phrase und Subtitle Edit sorge ich für Konsistenz, Effizienz und außergewöhnliche Qualität. Meine Expertise umfasst Übersetzung, Lektorat, Korrekturlesen, Lokalisierung, Untertitelung, Transkription, linguistische Qualitätssicherung (LQA) und Softwaretests. Mit meinem Engagement für Genauigkeit, Vertraulichkeit, Zuverlässigkeit und pünktliche Lieferung biete ich maßgeschneiderte Sprachlösungen an, die Unternehmen dabei helfen, über Sprachen und Kulturen hinweg effektiv zu kommunizieren.",
        downloadResume: "Lebenslauf herunterladen",
        downloadCV: "BCV herunterladen"
      },
      experience: {
        title: "Erfahrung",
        heading: "Meine Infos..",
        domainsTitle: "Meine Domänen",
        domainsDesc: "Seit 2009 habe ich verschiedene Domänen von SAP, IT, Business, Medical, ICF, Automobil, Android Apps, E-Learning, usw. in allen Sprachen bearbeitet. Außerdem habe ich bei der Transkription und Transkreation verschiedener Inhalte in allen Sprachen geholfen. Da ich ein begeisterter Leser bin, gepaart mit meiner Liebe zur Forschung und zum Detail, hat es mir geholfen, meine Sprachkenntnisse zu verstehen und zu entwickeln, um jeden Bereich mit der gleichen Expertise zu bewältigen.",
        languagesTitle: "Meine Sprachen",
        lang1: "Marathi – Muttersprache",
        lang2: "Hindi – Muttersprachliches Niveau",
        lang3: "Englisch – Muttersprachliches Niveau",
        lang4: "Deutsch – Professionelles Niveau",
        lang5: "Oriya – Fließend",
        educationTitle: "Meine Bildung",
        edu1: "Proz-zertifizierter professioneller Übersetzer",
        edu2: "CTP-zertifizierter Englisch-Deutsch-Übersetzer",
        edu3: "ISTQB zertifiziert",
        edu4: "Deutschkurse",
        edu5: "B.COM"
      },
      services: {
        title: "Dienstleistungen",
        heading: "Mein herausragendes Projekt",
        s1Title: "ENG-MAR",
        s1Desc: "Endkunde: Google, Quelle-Ziel: ENG-MAR, Fachgebiet: Google Maps, CAT-Tool/Anwendung: GTT, Wortzahl: regelmäßige kleine Aufträge...",
        s2Title: "ENG-HIN",
        s2Desc: "Projekt: Wörterbucherstellung, Quelle-Ziel: ENG nach HIN, Fachgebiet: Tourismus, CAT-Tool/Anwendung: MS Excel, Wortzahl: 40000. Detail: Wörterbucherstellung für die Tourismusbranche.",
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
      },
      skills: {
        title: "Meine Fähigkeiten",
        heading: "Werkzeuge, die ich benutze"
      },
      work: {
        title: "Arbeit",
        heading: "Meine ausgewählten Arbeiten",
        b1: "100 Great Inspiring Stories von G Francis Xavier (ENG)",
        b2: "Garma-garam-chivda (MAR)",
        b3: "Tales of Shakespeare: Charles und Merry Lamb (ENG)",
        b4: "Tales of Shakespeare: Charles und Merry Lamb (MAR)",
        b5: "The Little Black Book for Stunning Success (ENG)",
        b6: "The Little Black Book for Stunning Success (MAR)"
      },
      reviews: {
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
      },
      contact: {
        title: "Kontaktiere uns",
        heading: "Lassen Sie uns verbinden",
        contactUs: "Kontakt",
        email: "E-Mail",
        followUs: "Folgen Sie uns",
        fullName: "Vollständiger Name",
        enterName: "Geben Sie Ihren Namen ein",
        enterEmail: "Geben Sie Ihre E-Mail ein",
        phone: "Telefon",
        enterPhone: "Geben Sie Ihre Telefonnummer ein",
        sendMessage: "Nachricht senden",
        enterMessage: "Nachricht eingeben...",
        submit: "Absenden"
      },
      footer: {
        heading: "Kontakt",
        contactUsButton: "Kontakt",
        title: "Lassen Sie uns Sprachen und Kulturen durch präzise, professionelle Übersetzungen verbinden.",
        desc: "Ich stehe für neue Projekte und Kooperationen zur Verfügung, um Unternehmen dabei zu helfen, durch präzise Übersetzungen, Lokalisierung, Bearbeitung und linguistische Qualitätssicherung weltweit zu kommunizieren.",
        copyright: "© 2026 Srujaatrans",
        workBy: "Arbeit von Mugdha."
      },
      faq: {
        title: "FAQ",
        heading: "Häufig gestellte Fragen",
        q1: "Welche Dienstleistungen bieten Sie an?",
        a1: "Ich biete professionelle Übersetzung, Lokalisierung, Lektorat, Korrekturlesen, Transkription, Untertitelung, sprachliche Qualitätssicherung (LQA), Softwaretests und mehrsprachige Inhaltsprüfung an. Meine Expertise umfasst technische, IT-, medizinische, rechtliche, pädagogische, Versicherungs-, Geschäfts- und Marketinginhalte.",
        q2: "Wie gehen Sie an ein neues Projekt heran?",
        a2: "Jedes Projekt beginnt mit dem Verständnis Ihrer Anforderungen, Zielgruppe, Sprachkombination und Frist. Anschließend wähle ich die am besten geeigneten CAT-Tools und den Workflow aus und sorge so für eine genaue Übersetzung, kulturelle Relevanz, gründliche Qualitätskontrollen und eine pünktliche Lieferung mit klarer Kommunikation während des gesamten Projekts.",
        q3: "Welche Tools verwenden Sie für die Übersetzung?",
        a3: "Ich verwende eine breite Palette von CAT-Tools (Computer-Assisted Translation), darunter SDL Trados Studio, MemoQ, Memsource, Wordfast, XTM Cloud, Smartcat, Crowdin, Lokalise, Phrase und viele andere. Die Wahl des Tools hängt von den Projektanforderungen und den Vorlieben des Kunden ab.",
        q4: "Bieten Sie nach Abschluss des Projekts fortlaufenden Support an?",
        a4: "Ja. Ich biete Support nach der Lieferung, einschließlich Überarbeitungen, Aktualisierungen, Terminologiepflege und Unterstützung bei zukünftigen Lokalisierungsanforderungen, um sicherzustellen, dass Ihre Inhalte korrekt und konsistent bleiben.",
        q5: "Wie lange dauert es, ein Projekt abzuschließen?",
        a5: "Projektlaufzeiten hängen von Inhaltstyp, Komplexität, Sprachkombination und Wortanzahl ab. Nach Prüfung Ihrer Anforderungen erstelle ich einen klaren Lieferplan und sorge dafür, dass jedes Projekt termingerecht und in höchster Qualität abgeschlossen wird."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
`;

fs.writeFileSync('src/i18n.js', i18nContent, 'utf8');
