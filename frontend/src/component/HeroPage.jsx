import React from 'react'

export const 
HeroPage = () => {
  return (
    <section 
      className="w-screen h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-cherry-red flex flex-col items-center justify-center px-4 sm:px-10"
    >
      <div className="flex flex-col max-w-md mx-auto py-8 lg:py-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-playfair mb-2 sm:mb-4">
          WELCOME TO
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4 sm:mb-8 lg:mb-12">
          BLOGONOMY
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-lato text-neutral-gray mb-4 sm:mb-8 lg:mb-12">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
      </div>
    </section>
  )
}
