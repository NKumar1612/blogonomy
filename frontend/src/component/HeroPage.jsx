import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="w-screen h-screen md:h-full bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center px-6 sm:px-10">
      <div className="py-4 md:py-20 px-4 sm:px-5 text-center"> {/* Adjusted padding */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold font-playfair leading-tight">
          WELCOME TO
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-light mb-2 sm:mb-6 leading-tight">
          BLOGONOMY
        </h1>
        <p className="text-sm md:text-xl font-lato text-neutral-gray max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
        <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300 w-full sm:w-auto">
          Start Exploring
        </button>
      </div>
    </section>
  )
}
