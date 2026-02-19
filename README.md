# Aman Saxena — Portfolio

A minimalist portfolio site built with React + Vite.

## Tech Stack
- React 18
- Vite 5
- CSS Modules (zero dependencies for styling)
- Google Fonts: Space Mono, Cormorant Garamond, Syne

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Firebase Deployment

```bash
# Install Firebase CLI (if not already)
npm install -g firebase-tools

# Login
firebase login

# Initialize (select "Hosting", set public dir to "dist")
firebase init

# Build + deploy
npm run build && firebase deploy
```

## Project Structure

```
src/
├── components/        # One component + CSS module per section
│   ├── Cursor.jsx
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── content.js     # All resume content — edit here
├── hooks/
│   └── useScrollReveal.js
├── styles/
│   └── global.css     # CSS variables + base styles
├── App.jsx
└── main.jsx
```

## Customization

All resume content lives in `src/data/content.js` — edit that file to update
experience, projects, skills, certifications, and contact links without touching
any component code.
