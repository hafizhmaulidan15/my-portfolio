/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121214',
        surface: '#1E1E20',
        'surface-hover': '#252529',
        foreground: '#CBD5E1',
        'text-secondary': '#94A3B8',
        'text-tertiary': '#6B7A90',
        'text-muted': '#8A9AB0',
        'border-light': 'rgba(203,213,225,0.14)',
        'border': 'rgba(203,213,225,0.08)',
        'tory-blue': {
          50: '#edf8ff',
          100: '#d7eeff',
          200: '#b8e3ff',
          300: '#88d3ff',
          400: '#50baff',
          500: '#289cff',
          600: '#1181ff',
          700: '#0a69eb',
          800: '#0e4eb1',
          900: '#134995',
          950: '#112d5a',
        },
        primary: '#5B8DD1',
        'primary-hover': '#4A7FC0',
        'primary-active': '#3D6AA3',
        accent: {
          blue: '#7AB8D4',
          green: '#5BA68C',
        },
        success: '#3A9E7B',
        interactive: {
          button: 'rgba(255, 255, 255, 0.045)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Clash Display', 'Satoshi', 'Geist', 'sans-serif'],
        mono: ['Fira Code', 'Geist Mono', 'Monaco', 'monospace'],
      },
      fontSize: {
        'display': ['32px', { lineHeight: '40px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h1': ['28px', { lineHeight: '36px', letterSpacing: '-0.3px', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '0px', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '400' }],
        'body': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '500' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        'overline': ['10px', { lineHeight: '15px', letterSpacing: '0.5px', fontWeight: '400' }],
        'code': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
      },
      borderRadius: {
        'sm': '8px',
        'DEFAULT': '10px',
        'md': '14px',
        'lg': '18px',
        'full': '999px',
      },
      spacing: {
        'sidebar': '284px',
      },
      maxWidth: {
        'container': '1400px',
        'content': '1200px',
      },
      boxShadow: {
        'raised': 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        'floating': 'rgba(0, 0, 0, 0.1) 0px 2px 4px 0px',
        'lifted': 'rgba(0, 0, 0, 0.15) 0px 4px 8px 0px',
        'inset': 'rgba(255, 255, 255, 0.12) 0px -10px 50px -10px inset',
        'inset-hover': 'rgba(255, 255, 255, 0.15) 0px -10px 50px -10px inset',
        'pill': 'rgba(255, 255, 255, 0.12) 0px -10px 50px -10px inset',
        'primary-btn': 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        'primary-btn-hover': 'rgba(0, 0, 0, 0.1) 0px 2px 4px 0px',
        'primary-btn-active': 'rgba(0, 0, 0, 0.15) 0px 4px 8px 0px',
        'focus': '0px 0px 0px 3px rgba(17, 129, 255, 0.15)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
