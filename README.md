# Marcin Bieliński – Portfolio

Personal portfolio website built with **React** and **Vite**, deployed at [bieli.dev](https://bieli.dev).

---

## 🚀 Overview

A responsive single-page portfolio application showcasing web development projects, skills, career highlights, and a contact form.

### Features
- **Project Showcase**: Video previews and links to live production websites (e.g., school portals such as 17 LO Gdynia, SP 37 Gdynia, and ZSO 8 Gdynia).
- **About Me**: Summary of technical skills, language proficiencies, and career milestones.
- **Contact Form**: Protected against spam using invisible **hCaptcha** and processed via a Google Cloud Functions backend.
- **Lightweight Navigation**: State-driven page switching integrated with the browser History API (`pushState` / `popstate`).

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (Modular subpage stylesheets)
- **Security & Bot Protection**: [@hcaptcha/react-hcaptcha](https://github.com/hCaptcha/react-hcaptcha)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via `gh-pages` with custom CNAME (`bieli.dev`)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/CodinGeo/Portfolio.git

# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install
```

### Development

Run the Vite development server:
```bash
npm run dev
```

### Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

```

---

## 📬 Contact & Socials

- **Website**: [bieli.dev](https://bieli.dev)
- **GitHub**: [@CodinGeo](https://github.com/CodinGeo)