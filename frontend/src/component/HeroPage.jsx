import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="relative w-screen h-screen sm:min-h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center overflow-hidden">
      {/* Scrolling background images (optimized) */}
      <div className="absolute inset-0 flex animate-smooth-scroll">
        {/* ... (Images with srcset attribute for multiple sizes) ... */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col max-w-md mx-auto py-4 sm:py-10 md:py-20 text-center bg-gradient-to-r from-pale-pink to-light-lavender bg-opacity-75 rounded-md px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-playfair mb-2 sm:mb-4 md:mb-6">
          WELCOME TO
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-2 sm:mb-4 md:mb-6">
          BLOGONOMY
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-lato text-neutral-gray mb-4 sm:mb-6 md:mb-8 leading-snug sm:leading-normal">
          {/* Shorter and more concise tagline */}
          Elegant & minimalist blogs. 
        </p>
        <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300 w-full sm:w-auto">
          Start Exploring
        </button>
      </div>
    </section>
      )
}
