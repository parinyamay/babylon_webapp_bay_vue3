/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bay: {
          color: {
            brown: '#6f5f5e'
          },
          button: {
            yellow: {
              idle: '#ffd402',
              hover: '#e5be01',
              active: '#cca901'
            },
            brown: {
              idle: '#6f5f5e',
              hover: '#584c4b',
              active: '#423938'
            }
          }
        }
      },
      fontFamily: {
        NeueFrutigerLt: ['NeueFrutigerThaiModern-Lt', 'sans-serif'],
        NeueFrutigerRg: ['NeueFrutigerThaiModern-Rg', 'sans-serif'],
        NeueFrutigerBd: ['NeueFrutigerThaiModern-Bd', 'sans-serif'],
        AllianzNeoRg: ['allianz_neoregular']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
}
