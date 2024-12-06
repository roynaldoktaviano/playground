/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sancreek':['sancreek'],
      'vibes' : ["Great Vibes"]
    },
    extend: {
      backgroundImage:{
        'main': "url(./assets/bg.jpg)",
        'clr': "url(./assets/bgg.png)",
        'time': "url(./assets/kad.png)",
        'wkt': "url(./assets/wktu.png)"

      }
    },
  },
  plugins: [],
}

