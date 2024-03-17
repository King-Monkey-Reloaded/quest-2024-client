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
        '300': '#d8acff',
        '400': '#c177ff',
        '500': '#a944ff',
        '600': '#8f13fd',
        '700': '#8010e0',
        '800': '#6d13b6',
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
      'lilac': {
        '50': '#fbfaff',
        '100': '#ece8ff',
        '200': '#dcd5ff',
        '300': '#c2b4fe',
        '400': '#9c84fc',
        '500': '#7755f7',
        '600': '#5c33ea',
        '700': '#4a22ce',
        '800': '#4321a8',
        '900': '#381c87',
        '950': '#1f0764',
      },
      'jaguar': {
        '50': '#ebedff',
        '100': '#dadfff',
        '200': '#bcc3ff',
        '300': '#949aff',
        '400': '#6f6aff',
        '500': '#5d48ff',
        '600': '#5227ff',
        '700': '#471ce6',
        '800': '#3a1ab9',
        '900': '#321e91',
        '950': '#070413',
    },
      'neutral': '#F0ECFC',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}