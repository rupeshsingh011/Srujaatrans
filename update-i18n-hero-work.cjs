const fs = require('fs');

let i18nContent = fs.readFileSync('src/i18n.js', 'utf8');

// Hero Name Translation
i18nContent = i18nContent.replace(/hero: \{/, 'hero: {\n        name: "Mugdha<br />Ghate",');
i18nContent = i18nContent.replace(/hero: \{/, 'hero: {\n        name: "मुग्धा<br />घाटे",'); // this will hit the first one again if not careful
