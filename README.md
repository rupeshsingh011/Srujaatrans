# Srujaatrans

A modern, highly responsive portfolio and agency website built with **React** and **Vite**. This project focuses on beautiful UI/UX, responsive design that scales flawlessly from standard laptops all the way down to small mobile devices, and internationalization support.

## 🚀 Features

- **Responsive Design**: Carefully crafted CSS ensures perfect layouts across exact device constraints (Laptops, Tablets, Mobile L, Mobile M, Mobile S).
- **Component-Based Architecture**: Modular and reusable React components (Hero, About, Services, Experience, Skills, FAQ, Reviews, etc.).
- **Internationalization (i18n)**: Integrated with `i18next` and `react-i18next` for seamless multi-language support across **3 languages: English, Marathi, and German**.
- **Fast Development**: Powered by Vite for incredibly fast HMR and build times.
- **Linting**: Pre-configured with `oxlint` for high-performance JavaScript linting.

## 🛠️ Tech Stack

- **Core**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with comprehensive media queries and CSS Variables
- **Internationalization**: i18next, react-i18next, i18next-browser-languagedetector
- **Linting**: Oxlint

## 📂 Project Structure

```text
Srujaatrans/
├── server/               # Backend/Server files (if any)
├── src/
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # Reusable UI components
│   │   ├── AboutSection
│   │   ├── Companies
│   │   ├── ExperienceSection
│   │   ├── FaqSection
│   │   ├── Footer
│   │   ├── HeroSection
│   │   ├── Navbar
│   │   ├── Reviews
│   │   ├── ServicesSection
│   │   ├── SkillsSection
│   │   └── WorkSection
│   ├── hooks/            # Custom React hooks
│   ├── locales/          # i18n translation files
│   ├── pages/            # Application pages/views
│   ├── App.jsx           # Main application root component
│   ├── index.css         # Global styles and responsive breakpoints
│   ├── main.jsx          # React DOM rendering entry point
│   └── i18n.js           # i18next configuration
├── package.json          # Dependencies and scripts
└── start-dev.js          # Development server startup script
```

## 📦 Installation & Setup

1. **Clone the repository** (if applicable) or download the source code.
2. **Navigate to the project directory**:
   ```bash
   cd Srujaatrans
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## 💻 Usage

### Development Server
To start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Build for Production
To build the application for production deployment:
```bash
npm run build
```

### Preview Production Build
To preview the generated production build locally:
```bash
npm run preview
```

### Linting
To run Oxlint and check for code quality issues:
```bash
npm run lint
```

## 🎨 Design System & Responsiveness

The project uses Vanilla CSS to maintain full control over styling. Global CSS variables (`src/index.css`) handle the color palette and typography. 
Specific media queries are implemented globally and within component CSS files to support:
- **Laptops/Desktops** (`max-width: 1024px`)
- **Tablets** (`max-width: 768px`)
- **Mobile L** (`max-width: 425px`)
- **Mobile M** (`max-width: 375px`)
- **Mobile S** (`max-width: 320px`)
