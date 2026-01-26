# macOS Portfolio

An interactive personal portfolio that replicates the macOS interface, built with Vue.js 3 and Vite.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat&logo=greensock)

## Overview

This project is a web portfolio that simulates the macOS user experience, complete with draggable windows, animated dock, Finder, and Terminal. Optimized for desktop and tablet.

**Live Demo:** [GitHub Repository](https://github.com/Filiqpo/MacOS_Portfolio)

## Features

- **Draggable Windows** - Fully functional window system with drag-and-drop, z-index management, and smooth animations
- **Animated Dock** - Icons that scale on hover with distance-based intensity effect
- **Finder** - File browser with folder navigation and project display
- **Terminal** - Technical skills display in terminal style
- **CV Viewer** - Integrated PDF viewer with download option
- **Contact** - Section with social media links and email

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Vue.js 3, Vite |
| **Styling** | Tailwind CSS 4 |
| **State Management** | Pinia |
| **Animations** | GSAP |
| **UI Components** | Lucide Icons, Floating Vue |
| **Utilities** | Day.js, Vue PDF Embed |

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dock.vue        # Dock with animated icons
│   ├── Home.vue        # Desktop view with folders
│   ├── Navbar.vue      # Top navigation bar
│   ├── Welcome.vue     # Hero section with text animations
│   └── WindowControls.vue
│
├── windows/            # Window components
│   ├── Terminal.vue    # Tech stack display
│   ├── Finder.vue      # Project browser
│   ├── Contact.vue     # Contact information
│   ├── Curriculum.vue  # CV/PDF viewer
│   ├── Text.vue        # Text file viewer
│   └── Image.vue       # Image viewer
│
├── hoc/                # Higher-Order Components
│   └── WindowWrapper.vue
│
├── store/              # Pinia stores
│   ├── window.js       # Window state
│   └── location.js     # Finder navigation
│
└── const/              # Configuration and data
    └── index.js
```

## Installation

```bash
# Clone the repository
git clone https://github.com/Filiqpo/MacOS_Portfolio.git

# Enter the directory
cd MacOS_Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Detailed Features

### Window System
Each window uses the `WindowWrapper` component which provides:
- Drag-and-drop with GSAP Draggable
- Open/close animations
- Automatic z-index management
- macOS-style controls (close, minimize, maximize)

### Dock
The dock replicates macOS behavior with:
- Dynamic icon scaling on hover
- Exponential intensity calculation based on cursor distance
- Tooltip for each application
- Window toggle on click

### Finder
File browser with:
- Sidebar with favorites (Work, About, Resume, Trash)
- File and folder display
- Support for different file types (txt, images, PDF, URL)

### Terminal
Displays technical skills organized by category:
- Frontend
- Styling
- Backend
- Database
- Dev Tools

## Compatibility

- Desktop and Tablet (recommended)
- Modern browsers with support for:
  - CSS backdrop-filter
  - ES Modules
  - CSS Grid/Flexbox

## Author

**Filippo Comelato**

- GitHub: [@Filiqpo](https://github.com/Filiqpo)
- LinkedIn: [Filippo Comelato](https://www.linkedin.com/in/filippo-comelato-b3a1ba21b/)

## License

This project is open source and available under the MIT License.
