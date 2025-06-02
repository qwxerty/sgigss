/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nowoczesna paleta zieleni (jako akcent)
        accentGreen: {
          DEFAULT: '#00D140', // Główny akcent zielony, żywy
          50: '#E6FFF0',
          100: '#CFFFD4',
          200: '#99FFB3',
          300: '#66FF8C',
          400: '#33E666',
          500: '#00D140', // Bardziej zgaszona, ale wyrazista zieleń
          600: '#00A832',
          700: '#008026',
          800: '#00581B',
          900: '#00300F',
        },
        // Bardzo ciemne, neutralne odcienie szarości/czerni (główne tła i elementy)
        dark: {
          DEFAULT: '#101010', // Główny kolor tła
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C0C0C0',
          300: '#A0A0A0',
          400: '#808080',
          500: '#606060',
          600: '#404040',
          700: '#282828',
          800: '#1C1C1C',
          900: '#121212',
          950: '#080808', // Najciemniejszy, prawie czarny
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Nowoczesny, czytelny font
        // Jeśli chcesz mieć bardziej "gamingowy"/technologiczny font dla nagłówków, możesz dodać:
        // display: ['"Oxanium"', 'cursive'], // Pamiętaj o imporcie w index.css
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'pop-in': 'popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'pulse-glow-accent': 'pulseGlowAccent 1.5s infinite alternate', // Delikatny efekt dla przycisków
        'shine-text': 'shineText 2s linear infinite', // Subtelny efekt dla logo
        'border-pulse': 'borderPulse 2s infinite alternate', // Efekt dla obramowań
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        popIn: { '0%': { opacity: 0, transform: 'scale(0.8)' }, '100%': { opacity: 1, transform: 'scale(1)' } },
        pulseGlowAccent: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(0, 209, 64, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 209, 64, 0.8)' },
        },
        shineText: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'rgba(0, 209, 64, 0.3)' },
          '50%': { borderColor: 'rgba(0, 209, 64, 0.7)' },
        }
      },
    },
  },
  plugins: [],
}