/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      'wbbg': "url('https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000')",
    },
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
    require("daisyui"),
    
  ],
  daisyui: {
    themes: false,
  }
}
