module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        astro: {
          bg: '#1D2025',
          white: {
            1: '#F9F9FA',
            2: '#ECEEF0',
            3: '#DEE1E4',
            4: '#CFD3D8',
            5: '#BFC4CB',
            6: '#ADB4BD'
          },
          gray: {
            1: '#808A98',
            2: '#616D7D',
            3: '#434C57',
            4: '#394049',
            5: '#30363E'
          },
          dark: {
            1: '#262B32',
            2: '#1F2528',
            4: '#1D2025',
            3: '#1D1B27',
            5: '#02050A'
          },
          blue: {
            1: '#0760E0',
            2: '#043986'
          },
          green: {
            1: '#5FEBB1',
            2: '#07E086'
          },
          salmon: {
            1: '#F29D95',
            2: '#EE8076'
          }
        }

      }

    }
  },
  variants: {
    scrollbar: ['dark']
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')
  ]
}
