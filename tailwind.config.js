/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#eef2ff',
          300: '#c7d2fe',
          500: '#6366f1',
          700: '#4f46e5',
        },
        glass: 'rgba(255,255,255,0.6)'
      },
      boxShadow: {
        'soft-lg': '0 12px 30px rgba(2,6,23,0.12)'
      }
    },
  },
  plugins: [],
}

