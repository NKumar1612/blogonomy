import React from 'react'

export const 
HeroPage = () => {
  return (
    <section
      className="w-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center px-4 sm:px-10"
    >
      <div className="py-8 md:py-20 px-5 text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-playfair leading-tight">
          WELCOME TO
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 sm:mb-6 leading-tight">
          BLOGONOMY
        </h1>
        <p className="text-base md:text-xl font-lato text-neutral-gray max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
        <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300">
          Start Exploring
        </button>
      </div>
    </section>
  )
}
