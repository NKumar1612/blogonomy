/** @type {import('tailwindcss').Config} */

module.exports = {
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
        fadeInAndOut: {
          '0%, 100%': { opacity: 0 }, // Start and end fully transparent
          '50%': { opacity: 1 }, // Middle fully opaque
        }
      },
      animation: {
        'fade-in-out': 'fadeInAndOut 10s ease-in-out infinite', // Define the animation
      },
    },

  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
    
  ],
}
