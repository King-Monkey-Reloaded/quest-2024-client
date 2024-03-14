/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'primary': {
        '50': '#faf4ff',
        '100': '#f3e6ff',
        '200': '#e9d1ff',
        '300': '#d9acff',
        '400': '#c177ff',
        '500': '#aa44ff',
        '600': '#9013fd',
        '700': '#8110e0',
        '800': '#6e13b6',
        '900': '#5a1192',
        '950': '#3d006e',
      },
      'secondary': {
        '50': '#fff7ed',
        '100': '#ffedd5',
        '200': '#fed8aa',
        '300': '#fdbc74',
        '400': '#fba052',
        '500': '#f87617',
        '600': '#e95a0d',
        '700': '#c2430c',
        '800': '#9a3612',
        '900': '#7c2e12',
        '950': '#431507',
      },
      'white': '#FBFAFF',
      'black': '#070413',
      'neutral': '#F0ECFC',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}