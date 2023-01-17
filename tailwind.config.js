/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kedifapgreen': {
          100: '#c3d9c7',
          200: '#94bb9b',
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
