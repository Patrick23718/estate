/** @type {import('tailwindcss').Config} */
const flyonui = require("flyonui");

module.exports = {
  presets: [flyonui],
  content: [
    // "./src/**/*.{html,ts}",
    // './node_modules/flyonui/dist/js/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto as a custom font
      },
    },
  },
  plugins: [
    // require('flyonui'),
    // require('flyonui/plugin')
  ],
}

