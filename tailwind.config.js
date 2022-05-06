module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'yellow-hub': '#fcd34d',
      'yellow-hub-over': '#fbbf24',
      'blue-hub': '',
      'blue-hub-over': '',
      'gray-hub': '',
      'pink-hub': '',
      'purple-hub': '',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      poppins: ['Poppins', 'cursive'],
      goldman: ['Goldman', 'sans-serif'],
      tourney: ['Tourney', 'sans-serif'],
    },
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
