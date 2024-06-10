import React from 'react'

export const 
HeroPage = () => {
  return (
    <section 
      className="lg:w-screen lg:h-screen sm:min-h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center px-4 sm:px-10"
    >
      <div className="flex flex-col max-w-md mx-auto lg:py-8 sm:py-20 text-center text-wrap">
        <h1 className="sm:text-8xl lg:text-7xl font-bold font-playfair leading-tight mb-2">
          WELCOME TO
        </h1>
        <h1 className="sm:text-8xl lg:text-7xl font-light lg:mb-4 sm:mb-8 leading-tight">
          BLOGONOMY
        </h1>
        <p className="lg:text-sm sm:text-lg font-lato text-neutral-gray lg:mb-4 sm:mb-8">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
        {/* <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300 w-full sm:w-auto">
          Start Exploring
        </button> */}
      </div>
    </section>
  )
}
