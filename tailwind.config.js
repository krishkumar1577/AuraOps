/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        /* Linear Display Hierarchy */
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-3.0px', fontWeight: '600' }],
        'display-lg': ['56px', { lineHeight: '1.10', letterSpacing: '-1.8px', fontWeight: '600' }],
        'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '-1.0px', fontWeight: '600' }],
        'headline': ['28px', { lineHeight: '1.20', letterSpacing: '-0.6px', fontWeight: '600' }],
        'card-title': ['22px', { lineHeight: '1.25', letterSpacing: '-0.4px', fontWeight: '500' }],
        'subhead': ['20px', { lineHeight: '1.40', letterSpacing: '-0.2px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.50', letterSpacing: '-0.1px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.50', letterSpacing: '-0.05px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.50', letterSpacing: '0px', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '1.20', letterSpacing: '0px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.40', letterSpacing: '0px', fontWeight: '400' }],
        'eyebrow': ['13px', { lineHeight: '1.30', letterSpacing: '0.4px', fontWeight: '500' }],
        'mono': ['13px', { lineHeight: '1.50', letterSpacing: '0px', fontWeight: '400' }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        /* Linear Brand & Accent */
        primary: '#5e6ad2',
        'primary-hover': '#828fff',
        'primary-focus': '#5e69d1',
        'brand-secure': '#7a7fad',
        
        /* Linear Surface Ladder */
        canvas: '#010102',
        'surface-1': '#0d0d14',
        'surface-2': '#14141f',
        'surface-3': '#1a1a26',
        'surface-4': '#22222f',
        
        /* Linear Hairline/Borders */
        hairline: '#23252a',
        'hairline-strong': '#3b3f47',
        'hairline-tertiary': '#42454d',
        
        /* Linear Text */
        ink: '#f7f8f8',
        'ink-muted': '#d0d6e0',
        'ink-subtle': '#8a8f98',
        'ink-tertiary': '#62666d',
        
        /* Linear Inverse */
        'inverse-canvas': '#ffffff',
        'inverse-surface-1': '#f5f5f5',
        'inverse-surface-2': '#ececec',
        'inverse-ink': '#000000',
        
        /* Linear Semantic */
        'semantic-success': '#27a644',
        'semantic-overlay': '#000000',
        
        /* Backward compat aliases */
        'bg-main': '#010102',
        'bg-surface': '#0d0d14',
        'text-main': '#f7f8f8',
        'text-muted': '#d0d6e0',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        xxl: '24px',
        pill: '9999px',
        full: '9999px',
      },
      spacing: {
        unit: '4px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        section: '96px',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
}
