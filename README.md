# AuraOps

A modern web development environment built with **Vite + React + Tailwind CSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx          # Main React component
├── App.css          # App styles
├── index.css        # Global styles with Tailwind CSS
├── main.tsx         # Application entry point
└── assets/          # Static assets
```

## 🎨 Technologies

- **Vite** - Next generation frontend tooling for fast development and optimized builds
- **React** - Modern UI library with hooks and JSX
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS transformations with Autoprefixer support

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📦 Dependencies

### Main
- `react` - UI library
- `react-dom` - React DOM rendering

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite React plugin with Oxc/SWC
- `tailwindcss` - Utility-first CSS framework v4
- `@tailwindcss/postcss` - PostCSS plugin for Tailwind CSS v4
- `postcss` - CSS transformations
- `autoprefixer` - Vendor prefix automation
- `typescript` - TypeScript compiler
- `eslint` - Code quality and style

## 🌐 Browser Support

Works with all modern browsers that support ESM.

## 📝 Configuration Files

### tailwind.config.js
Tailwind CSS v4 configuration with content scanning for template files.

### postcss.config.js
PostCSS configuration using the new `@tailwindcss/postcss` plugin for v4.

### vite.config.ts
Vite build configuration with React plugin and TypeScript support.

### tsconfig.json
TypeScript configuration for the application and build tools.

## 🎯 Best Practices

- Use Tailwind CSS utility classes for styling
- Keep components small and focused
- Leverage TypeScript for type safety
- Check [ESLint configuration](eslint.config.js) for code quality rules

## 📄 License

MIT

