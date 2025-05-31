module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-950': '#0A1F16',
        'green-900': '#0F2D1F',
        'green-800': '#143D2A',
        'green-700': '#1A4D35',
        'green-600': '#1F5D40',
        'green-500': '#2E7D4D',
        'green-400': '#34D399',
        'green-300': '#48BB78',
        'green-200': '#9AE6B4',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'bg-move': 'bgMove 30s linear infinite',
      },
      keyframes: {
        bgMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
      },
    },
  },
  plugins: [],
}