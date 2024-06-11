import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="relative w-screen h-screen sm:min-h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center overflow-hidden">
      {/* Scrolling background images (optimized) */}
      <div className="absolute inset-0 flex animation-seamless-scroll"> {/* Changed class name */}
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786')]"></div>
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b')]"></div>
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto py-8 sm:py-20 text-center bg-gradient-to-r from-pale-pink to-light-lavender bg-opacity-75 rounded-md px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-2 text-deep-burgundy">
          WELCOME TO
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight text-deep-burgundy">
          BLOGONOMY
        </h1>
        <p className="text-xs sm:text-base lg:text-lg font-lato text-neutral-gray mb-4 sm:mb-6 md:mb-8">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
        <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-6 rounded-md hover:bg-darker-mint-green transition-colors duration-300 w-full sm:w-auto">
          Start Exploring
        </button>
      </div>
    </section>



      )
}
