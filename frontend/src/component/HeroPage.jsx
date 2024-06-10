import React from 'react'

export const 
HeroPage = () => {
  return (
    <section 
      className="w-screen h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center px-4 sm:px-6 md:px-10"
    >
      <div className="flex flex-col max-w-md mx-auto py-8 sm:py-10 md:py-20 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-playfair mb-4 sm:mb-6">
          WELCOME TO
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-4 sm:mb-6 md:mb-8">
          BLOGONOMY
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-lato text-neutral-gray mb-6 sm:mb-8 md:mb-12">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
      </div>
    </section>



  )
}
