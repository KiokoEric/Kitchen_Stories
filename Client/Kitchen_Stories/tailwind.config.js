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
        darkOrange: `hsl(11, 60%, 50%)`,
        lightOrange: 'hsl(11, 87%, 59%)',
        buttonOrange:  'hsl(11, 83%, 51%)',
      },
      borderRadius: {
        'Header': '0px 0px 0px 5px'
      },
      width: {
        'custom': '85vw'
      }
    },
  },
  plugins: [],
}
