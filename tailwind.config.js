/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c5364',
        secondary: '#3498db',
        accent: '#2ecc71',
        dark: '#0f2027',
        light: '#f8f9fa',
        gray: '#6c757d',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '0 1px 3px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.4)',
        },
      })
    },
  ],
}