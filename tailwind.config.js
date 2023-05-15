/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {

      animation: {
        stars: 'stars 12s linear infinite',
      },
      keyframes: {
        stars: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'sans-serif']
      },
      spacing: {
        'some key': {
          1.5: '<something>', // not sure about the correct value
        },
      },
    },
  },
  content: ["./**/**/*.{js,ts,jsx,tsx,html}", "./**/*.{js,ts,jsx,tsx,html}", "./*.{html,js,jsx}"],
  plugins: [require('tailwind-scrollbar')],
};