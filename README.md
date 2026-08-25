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

## 🔐 Admin Panel (Content Management)

Every text section, image, and list (Reviews, Work Samples, Certifications, Skills)
on the site can be edited from a built-in admin panel — no code changes or
redeploys needed.

### One-time setup

1. Make sure `server/.env` has `MONGODB_URI`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`,
   and `JWT_SECRET` set (see `server/.env`; change the default password before
   going live).
2. Seed the database with the site's existing content and images:
   ```bash
   node server/seed.js
   node server/seed-extra.js
   ```
   Both scripts are safe to re-run — they only fill in content that doesn't
   already exist in the database.

### Using it

1. Run the app as usual (`npm run dev`, which starts both Vite and the
   Express server via `start-dev.js`).
2. Visit `/admin/login` and sign in with the credentials from `server/.env`.
3. Edit any section from the sidebar. Text fields have per-language tabs
   (EN / MR / HI / DE). Changes save immediately and appear on the live site
   on next page load — no rebuild required.

### How content storage works

- Simple text sections (Hero, About, Experience, Services, Companies, FAQ,
  Footer, Navbar) are stored as key-value documents in the `SiteContent`
  MongoDB collection, one per `section.key`, each holding all 4 language
  translations.
- List sections (Reviews, Work Samples, Certifications, Skills) are their own
  MongoDB collections (`Review`, `WorkItem`, `Certification`, `Skill`) and
  support full add/edit/delete from the admin panel.
- Uploaded images are stored on the server's filesystem under
  `server/uploads/` (git-ignored) and served at `/uploads/<filename>`.
- The frontend fetches all of this once on load via `SiteContentContext`
  (`src/context/SiteContentContext.jsx`) and falls back to the original
  bundled text in `src/i18n.js` if the API is unreachable.

## 🎨 Design System & Responsiveness

The project uses Vanilla CSS to maintain full control over styling. Global CSS variables (`src/index.css`) handle the color palette and typography. 
Specific media queries are implemented globally and within component CSS files to support:
- **Laptops/Desktops** (`max-width: 1024px`)
- **Tablets** (`max-width: 768px`)
- **Mobile L** (`max-width: 425px`)
- **Mobile M** (`max-width: 375px`)
- **Mobile S** (`max-width: 320px`)
