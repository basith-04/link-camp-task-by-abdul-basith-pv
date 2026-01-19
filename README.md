# IEEE LINK Camp 2025 🚀

> Official website for IEEE Kerala Section LINK Camp 2025 - A leadership and networking event for passionate volunteers and emerging leaders.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://ieee-link.web.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📋 Overview

The IEEE LINK Camp 2025 website is a modern, responsive single-page application built with Next.js and deployed on Firebase Hosting. The site showcases the event details, schedule, and provides an application portal for aspiring delegates.

**Key Features:**
- 🎨 Modern UI with IEEE brand identity
- 📱 Fully responsive mobile-first design
- ✨ Smooth animations using Framer Motion
- 🚀 Static site generation for optimal performance
- 🔥 Deployed on Firebase Hosting
- ♿ Accessible and SEO-optimized

**Live Site:** [https://ieee-link.web.app](https://ieee-link.web.app)

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom IEEE Brand Colors** - `#00629B`, `#00B5E2`, `#FFA400`, `#002855`
- **[Google Fonts](https://fonts.google.com/)** - Open Sans & Source Code Pro

### Animations & Icons
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Hosting & Deployment
- **[Firebase Hosting](https://firebase.google.com/products/hosting)** - Static site hosting
- **GitHub** - Version control and collaboration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📁 Project Structure

```
link-camp-task-by-abdul-basith-pv/
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.jsx            # Root layout with metadata
│   └── page.jsx              # Main page component
├── components/
│   ├── Navbar.jsx            # Navigation bar with mobile menu
│   ├── Hero.jsx              # Hero section with animations
│   ├── About.jsx             # About IEEE Kerala Section
│   ├── Schedule.jsx          # Event schedule timeline
│   ├── ScheduleItem.jsx      # Individual schedule item
│   ├── Registration.jsx      # Application process section
│   └── Footer.jsx            # Footer with social links
├── public/                   # Static assets
├── out/                      # Build output (generated)
├── firebase.json             # Firebase configuration
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/basith-04/link-camp-task-by-abdul-basith-pv.git
   cd link-camp-task-by-abdul-basith-pv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including Next.js, React, Tailwind CSS, Framer Motion, and Lucide React.

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)

---

## 💻 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server on `http://localhost:3000` with hot-reload enabled.

### Production Build
```bash
npm run build
```
Creates an optimized production build with static HTML export.

### Export Static Site
```bash
npm run export
```
Generates a static export in the `out/` directory (alias for `npm run build`).

### Deploy to Firebase
```bash
npm run deploy
```
Builds the static site and deploys it to Firebase Hosting in one command.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

---

## 🔥 Firebase Deployment

### First-Time Setup

1. **Install Firebase CLI** (if not already installed)
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase** (already configured, but for reference)
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Public directory: `out`
   - Single-page app: `Yes`

### Deploy

Simply run:
```bash
npm run deploy
```

This will:
1. Build your Next.js app as a static export
2. Deploy to Firebase Hosting
3. Provide you with the live URL

**Your site will be live at:** `https://ieee-link.web.app`

---

## 🎨 Customization

### Brand Colors

The IEEE brand colors are defined in `tailwind.config.js`:

```javascript
colors: {
  ieee: {
    blue: '#00629B',
    cyan: '#00B5E2',
    orange: '#FFA400',
    darkBlue: '#002855',
    lightGray: '#F8F9FA',
  },
}
```

### Fonts

Google Fonts are imported in `app/globals.css`:
- **Open Sans** - Primary font (sans-serif)
- **Source Code Pro** - Monospace font

### Components

All components are located in the `components/` directory and can be easily modified:
- Edit content in individual component files
- Modify styles using Tailwind classes
- Adjust animations in Framer Motion configurations

---

## 📱 Responsive Design

The site is built with a mobile-first approach and is fully responsive across all devices:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Contributors

- **Abdul Basith PV** - [@basith-04](https://github.com/basith-04)

---

## 🙏 Acknowledgments

- **IEEE Kerala Section** - For organizing LINK Camp 2025
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations

---

## 📞 Contact

For questions or support, please contact:
- **Email:** basithofficialmail01@gmail.com
- **GitHub:** [@basith-04](https://github.com/basith-04)

---

## 🔗 Links

- **Live Site:** [https://ieee-link.web.app](https://ieee-link.web.app)
- **GitHub Repository:** [https://github.com/basith-04/link-camp-task-by-abdul-basith-pv](https://github.com/basith-04/link-camp-task-by-abdul-basith-pv)
- **Firebase Console:** [https://console.firebase.google.com/project/ieee-link](https://console.firebase.google.com/project/ieee-link)

---

<div align="center">
  <p>Made with ❤️ for IEEE Kerala Section</p>
  <p>© 2025 IEEE Kerala Section. All rights reserved.</p>
</div>