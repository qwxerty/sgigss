/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#0a1a0f', // Najciemniejszy zielony
          900: '#14301a',
          800: '#1e4826',
          700: '#286032',
          600: '#347c40',
          500: '#40984e',
          400: '#34d399', // Jasny akcent zielony
          300: '#6ee7b7',
        },
        gray: {
          900: '#1a202c',
          800: '#2d3748',
          700: '#4a5568',
          600: '#718096',
          500: '#a0aec0',
          400: '#cbd5e0',
          300: '#e2e8f0',
          200: '#edf2f7',
        },
        red: {
          600: '#dc2626',
          700: '#b91c1c',
        },
        yellow: {
          400: '#facc15',
        },
        purple: {
          400: '#c084fc', // Dla Nitro
        }
      },
      animation: {
        'bg-move': 'bgMove 60s linear infinite alternate',
      },
      keyframes: {
        bgMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        }
      },
    },
  },
  plugins: [],
}