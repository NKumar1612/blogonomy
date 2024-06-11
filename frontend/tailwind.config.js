/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // modify already declared stuff
    colors:{
      'chery-red' : '#CC313D',
      'bubblegum-pink' : '#FFD2DC',
      'neutral-gray': '#808080',
      'soft-white': '#FFFFFF',
      'muted-mint-green': '#A2D5C6',
      'darker-mint-green':'#77BDB0',
      'light-lavender': '#E6E6FA',
      'pale-pink':'#FFEBF0',
      'soft-mint-green': '#B8E7DE',
      'lavender':'#B0A8E6',
      'coral':'#FF6F61',
      'coral-light':'#FFAFA4',
      'deep-burgundy': '#800020',
      'deep-teal':'#005F61',
      'teal':'#008B8B',
      'dark-olive-green':'#556B2F',
    },

    
    extend: {

      fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
      'barlow': ['Barlow Condensed','sans-serif']
    },
    keyframes: {
        smoothScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'smooth-scroll': 'smoothScroll 20s linear infinite',
      },
    },

    },
    
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
    
  ],
}

