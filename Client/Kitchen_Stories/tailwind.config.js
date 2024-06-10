/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: '#f60',
        lightOrange: 'hsl(11, 87%, 59%)',
        darkOrange: `hsl(11, 60%, 50%)`
      }
    },
  },
  plugins: [],
}

