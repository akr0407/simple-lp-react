Portfolio Landing Page
Modern, responsive portfolio landing page built with React, Vite, TailwindCSS, shadcn/ui, and anime.js animations.

✨ Features
Responsive Design: Mobile-first approach with seamless tablet and desktop experience
Dark Mode: Toggle between light and dark themes with localStorage persistence
Smooth Animations: anime.js powered entrance animations and interactions
Accessibility: ARIA labels, semantic HTML, keyboard navigation support
Modern UI: shadcn/ui components with beautiful gradients and shadows
Performance Optimized: Lazy-loaded animations and optimized bundle size
🛠 Tech Stack
React 18 - Modern React with hooks
Vite - Fast build tool and dev server
TailwindCSS - Utility-first CSS framework
shadcn/ui - High-quality UI components
anime.js - Lightweight animation library
Lucide React - Beautiful SVG icons
🚀 Installation & Setup
Prerequisites
Node.js (v16 or higher)
npm, yarn, or pnpm
Quick Start
Clone or create the project:
bash
   mkdir portfolio-landing
   cd portfolio-landing
Copy all the files from the artifacts into your project directory
Install dependencies:
bash
   npm install
   # or
   yarn install
   # or
   pnpm install
Start development server:
bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
Open your browser and navigate to http://localhost:5173
📦 Build & Deploy
Build for Production
bash
npm run build
Preview Production Build
bash
npm run preview
Deploy to Vercel
Push your code to GitHub
Connect your GitHub repository to Vercel
Vercel will automatically build and deploy your site
Your site will be live at https://your-project-name.vercel.app
Deploy to GitHub Pages
Install gh-pages: npm install --save-dev gh-pages
Add to package.json scripts: "deploy": "gh-pages -d dist"
Update vite.config.js base to your repo name: base: '/your-repo-name/'
Run: npm run build && npm run deploy
🎨 Customization
Colors & Themes
Modify CSS variables in src/index.css for custom color schemes
Update gradient colors in components for different brand colors
Tailwind color classes can be easily swapped throughout components
Animation Timings
Adjust anime.js duration, delay, and easing in component files
Modify anime.stagger() values for different reveal timings
Update IntersectionObserver thresholds for animation triggers
Content
Update personal information in src/components/Hero.jsx
Modify features array in src/components/Features.jsx
Change social links and contact information throughout components
Adding New Sections
Create new component in src/components/
Import and add to src/App.jsx
Add intersection observer animations if needed
Update navigation/scroll behavior as needed
🔧 Key Components
Hero: Main landing section with animated introduction
Features: Skill cards with staggered animations
CallToAction: Contact section with bounce animations
ThemeToggle: Dark/light mode switcher with localStorage
Footer: Simple footer with credits
📱 Responsive Breakpoints
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Large Desktop: > 1280px
♿ Accessibility Features
Semantic HTML structure
ARIA labels and descriptions
Keyboard navigation support
Color contrast compliance
Screen reader friendly animations
Focus indicators
🐛 Common Issues & Solutions
Animation not working?

Ensure anime.js is properly imported
Check console for JavaScript errors
Verify IntersectionObserver browser support
Dark mode not persisting?

localStorage might be disabled
Check browser developer tools for errors
Ensure ThemeToggle component is properly mounted
Responsive issues?

Verify Tailwind breakpoint classes
Test on different screen sizes
Check for conflicting CSS
📄 License
MIT License - feel free to use this template for your own portfolio!

Built with ❤️ using React + Vite + TailwindCSS + shadcn/ui + anime.js

