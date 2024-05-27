import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="w-screen min-h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center px-4 sm:px-10"> 
      <div className="py-10 md:py-20 px-5 text-center flex-wrap"> {/* Added flex-wrap */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-playfair">
          WELCOME TO
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 sm:mb-6">
          BLOGONOMY
        </h1>
        <p className="text-base md:text-xl font-lato text-neutral-gray max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
        <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300">
          Start Exploring
        </button>
      </div>
    </section>
  )
}
