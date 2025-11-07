# 🚀 Three.js Interactive Portfolio

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.180.0-black.svg)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)

A cutting-edge, immersive 3D portfolio website built with modern web technologies. This project showcases advanced full-stack development skills through interactive 3D environments, smooth animations, and responsive design.

![Portfolio Preview](./public/assets/grid1.png)

## 🌟 Live Demo

[🔗 View Live Portfolio](https://my-portfolio-gaurav-yadavs-projects-fc7d13e8.vercel.app/)

## ✨ Key Features

### 🎮 Interactive 3D Environment

- **Immersive Hacker Room**: Fully interactive 3D workspace with detailed models
- **Animated 3D Objects**: Floating React logo, rotating cube, orbiting rings, and target with physics
- **Responsive Camera Controls**: Mouse-controlled camera with smooth easing
- **Real-time Animations**: GSAP-powered transitions and object movements

### 📱 Responsive Design

- **Mobile-First Approach**: Optimized for all screen sizes (440px - 4K+)
- **Adaptive 3D Scaling**: Objects reposition and scale based on viewport
- **Touch-Friendly**: Mobile-optimized interactions and navigation

### 🎯 Advanced Components

- **Project Showcase**: Interactive carousel with 3D computer model displaying project videos
- **Education Timeline**: Animated developer character with hover-triggered animations
- **Contact Integration**: Functional EmailJS-powered contact form
- **Loading States**: Custom canvas loader with progress indicators

### 🎨 Modern UI/UX

- **Dark Theme**: Professional black background with gradient accents
- **Custom Animations**: Waving hand emoji, button hover effects, and micro-interactions
- **Typography**: Custom "General Sans" font with gradient text effects
- **Smooth Scrolling**: Enhanced navigation with section anchors

## 🛠️ Technology Stack

### Core Framework

- **React 19.1.1** - Latest React with concurrent features and automatic batching
- **Vite 7.1.7** - Lightning-fast build tool and development server
- **Three.js 0.180.0** - Powerful 3D graphics library

### 3D & Animation

- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions
- **GSAP 3.13.0** - High-performance animation library
- **@gsap/react** - GSAP React integration

### Styling & UI

- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS integration
- **Custom CSS Variables** - Consistent theming system

### Utilities & Libraries

- **EmailJS** - Client-side email sending
- **Globe.gl** - Interactive 3D globe component
- **React Responsive** - Responsive design utilities
- **Leva** - Development GUI controls
- **React DOM 19.1.1** - React DOM rendering

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── assets/           # Static assets (icons, images, logos)
│   ├── models/           # 3D model files (.glb, .fbx)
│   └── textures/         # Texture maps and videos
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Button.jsx    # Interactive button with beam effect
│   │   ├── CanvasLoader.jsx # 3D scene loading indicator
│   │   ├── Cube.jsx      # Animated rotating cube
│   │   ├── DemoComputer.jsx # 3D computer with video texture
│   │   ├── Developer.jsx # Animated character model
│   │   ├── HackerRoom.jsx # Main 3D environment
│   │   ├── HeroCamera.jsx # Camera controls and positioning
│   │   ├── ReactLogo.jsx # Floating React logo
│   │   ├── Rings.jsx     # Orbiting ring system
│   │   └── Target.jsx    # Floating target with animation
│   ├── section/          # Page sections
│   │   ├── About.jsx     # Personal info and tech stack
│   │   ├── Contact.jsx   # Contact form with EmailJS
│   │   ├── Education.jsx # Education timeline with 3D model
│   │   ├── Footer.jsx    # Site footer with social links
│   │   ├── Hero.jsx      # Landing section with 3D scene
│   │   ├── Navbar.jsx    # Responsive navigation
│   │   └── Projects.jsx  # Project showcase carousel
│   ├── constants/        # Application data and configuration
│   │   └── index.js      # Navigation, projects, education data
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles and Tailwind imports
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
├── eslint.config.js      # ESLint configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16.0.0
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/three-js-portfolio.git
   cd three-js-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will hot-reload on file changes

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization Guide

### Adding New Projects

Edit `src/constants/index.js` to add projects to the carousel:

```javascript
{
  title: "Project Name",
  desc: "Detailed project description",
  subdesc: "Additional technical details",
  href: "https://project-link.com",
  texture: "/textures/project/project-video.mp4",
  logo: "/assets/project-logo.png",
  logoStyle: {
    backgroundColor: "#1c2e38",
    border: "0.2px solid #091319",
    boxShadow: "0px 0px 60px 0px #3c4e57",
  },
  spotlight: "/assets/spotlight-image.png",
  tags: [
    { id: 1, name: "React", path: "/assets/react.svg" },
    { id: 2, name: "Three.js", path: "/assets/threejs.svg" }
  ]
}
```

### Modifying 3D Scenes

Use the Leva GUI (available in development) to adjust:

- Object positions, rotations, and scales
- Lighting intensity and color
- Camera field of view and positioning
- Animation timing and easing

### Styling Customization

The project uses a comprehensive CSS variable system in `src/index.css`:

```css
:root {
  --color-black: #000;
  --color-white: #ffffff;
  --font-family-generalsans: "General Sans", sans-serif;
}
```

### EmailJS Configuration

Update the contact form in `src/section/Contact.jsx`:

```javascript
const serviceId = "your-service-id";
const templateId = "your-template-id";
const publicKey = "your-public-key";
```

## 📱 Component Breakdown

### 3D Components

- **HackerRoom**: Main 3D environment with desk, monitors, and equipment
- **Developer**: Animated character with multiple FBX animations (idle, salute, clapping, victory)
- **DemoComputer**: 3D computer model with video texture mapping
- **Cube**: Rotating cube with hover interactions
- **ReactLogo**: Floating React logo with physics
- **Rings**: Orbital ring system with staggered animations
- **Target**: Floating target with vertical oscillation

### UI Components

- **Button**: Customizable button with optional "beam" effect
- **CanvasLoader**: Loading screen with progress percentage
- **HeroCamera**: Camera controller with mouse tracking

### Section Components

- **Hero**: Landing section with 3D scene and CTA
- **About**: Personal introduction with globe visualization
- **Projects**: Interactive project carousel
- **Education**: Timeline with animated developer model
- **Contact**: Terminal-themed contact form
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Social links and copyright

## 🎯 Performance Optimizations

- **Lazy Loading**: 3D models loaded on demand
- **Texture Optimization**: Compressed textures and efficient formats
- **Animation Batching**: GSAP timeline optimization
- **Responsive Scaling**: Reduced geometry on mobile devices
- **Code Splitting**: Vite's automatic chunk splitting

## 🌐 Deployment

### Recommended: Vercel

1. Connect GitHub repository to Vercel
2. Automatic deployments on push to main branch
3. Built-in CDN and SSL certificate

### Alternative: Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Enable SPA fallback for client-side routing

### Manual Deployment

```bash
npm run build
# Upload 'dist' folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint configuration
- Use descriptive commit messages
- Test on multiple screen sizes
- Optimize 3D assets for web

## 🙏 Acknowledgments

- **3D Models**: Custom-designed assets optimized for web
- **Animations**: FBX animations from Mixamo
- **Icons**: Tech stack icons from various sources
- **Fonts**: "General Sans" from CDN Fonts

**Gaurav Singh**
- **Email**: singhgaurav.y@gmail.com


---

**Built with ❤️ using React, Three.js, and modern web technologies**

_Experience the future of web portfolios with immersive 3D interactions!_
