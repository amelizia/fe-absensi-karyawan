module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Generate custom color palette
        'black-custom-1': '#333333', //1
        'blue-custom-1': '#555B6E', //2
        'blue-custom-2': '#89B0AE', //3
        'blue-custom-3': '#BEE3DB', //4
        'white-custom-1': '#E5E5E5', //5
        'white-custom-2': '#ECECEC', //5
        'orange-custom-1' :'#FFD6BA', //6
        'green-custom-1' : '#D9ED92', //7
        'green-custom-2' : '#99D98C', //8
        'green-custom-3' : '#739492', //9
        'whi-custom-1' : '#FAF9F9' //background

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
