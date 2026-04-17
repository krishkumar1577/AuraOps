/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': '39.06px',
        'h2': '31.25px',
        'h3': '25px',
        'h4': '20px',
        'body-lg': '18px',
        'body': '16px',
        'body-sm': '14px',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary: '#E4F222',
        'bg-main': '#0A0A0A',
        'bg-surface': '#141414',
        'text-main': '#FFFFFF',
        'text-muted': '#A0A0A0',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      spacing: {
        unit: '4px',
      },
    },
  },
}
