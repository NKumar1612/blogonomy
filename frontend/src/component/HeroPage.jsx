import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="w-screen h-screen sm:min-h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
    <div className="max-w-md mx-auto py-8 sm:py-20 lg:py-24 text-center"> 
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-playfair leading-tight mb-2 text-deep-burgundy">
        WELCOME TO
      </h1>
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight text-deep-burgundy">
        BLOGONOMY
      </h1>
      <p className="text-xs sm:text-lg lg:text-xl font-lato text-neutral-gray mb-4 sm:mb-8 md:mb-12">
        Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
      </p>
      <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300 w-full sm:w-auto">
        Start Exploring
      </button>
    </div>
  </section>


  )
}
