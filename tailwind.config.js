/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(45deg)' },
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
