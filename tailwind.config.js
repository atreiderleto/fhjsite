module.exports = {
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        quick: ['Quicksand'],
      },
      colors: {
        bgf: '#F7F7FC',
        sblue: "#002B52",
        syellow: '#FFCE00',
      },
      backgroundImage: theme => ({
        'busqueda': "url('../public/img/medio/icons8_search.svg')",
        'jumbo': "url('../public/img/medio/jumbotron.png')",
        'sticker': "url('../public/img/medio/grupo3.png')",
        'sticker1': "url('../public/img/medio/Group4.svg')",
        'sticker2': "url('../public/img/medio/Group5.svg')",
        'cursos': "url('../public/img/cursos/Rectangle631.png')",
      }),
      keyframes: {

        menul: {

          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0.5)' },
          '100%': { transform: 'translateX(1)' }
        },

        menur: {

          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0.5)' },
          '100%': { transform: 'translateX(1)' }
        }
      },

      animation: {
        menur: 'menur 600ms',
        menul: 'menul 600ms'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
