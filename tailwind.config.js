/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'xlg': {'max': '1109px'},
      'lg': {'max': '991px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'Oswald': ['Oswald', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#333',
        secondary: '#f7f7f7',
        white: '#fff',
        four: '#757575',
        gray: '#cdcdcd',
        lightGray: '#eeeeee',
        bgButton: '#ff0000',
        darkRed: '#a10f2b',
        headerBg: '#171717',
        green: '#1F6600',
        black_06: 'background-color: rgba(0, 0, 0, 0.6)'
      },
      gridTemplateColumns: {
        gridCol: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridColDelivery: 'repeat(auto-fit, minmax(330px, 1fr))',
      },
    },
  },
  plugins: [],
}
