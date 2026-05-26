/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#18181B',
        'surface-hover': '#27272A',
        foreground: '#FFFFFF',
        'text-secondary': '#E4E4E7',
        'text-tertiary': '#71717B',
        'text-muted': '#9F9FA9',
        primary: '#1447E6',
        'primary-hover': '#0D3BB8',
        'primary-active': '#0A2E88',
        accent: {
          orange: '#F05100',
          teal: '#009588',
          blue: '#104E64',
          red: '#FF6568',
          green: '#00BB7F',
        },
        success: '#00BB7F',
        warning: '#F99C00',
        'warning-alt': '#FCBB00',
        error: '#E40014',
        interactive: {
          button: 'rgba(255, 255, 255, 0.045)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'monospace'],
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
        'focus': '0px 0px 0px 3px rgba(20, 71, 230, 0.1)',
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
