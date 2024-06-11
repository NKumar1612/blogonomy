import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center overflow-hidden">
      {/* Scrolling background images */}
      <div className="absolute inset-0 flex animate-smooth-scroll">
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786')]"></div>
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b')]"></div>
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col max-w-md mx-auto py-4 sm:py-10 md:py-20 text-center bg-gradient-to-r from-pale-pink to-light-lavender bg-opacity-75 rounded-md px-4 sm:px-6 md:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-2 sm:mb-4 md:mb-6">
          WELCOME TO
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-2 sm:mb-4 md:mb-6">
          BLOGONOMY
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-lato text-neutral-gray mb-4 sm:mb-6 md:mb-8">
          Your curated collection of elegant and minimalist blogs. Discover inspiring stories and insightful perspectives.
        </p>
      </div>
    </section>

  )
}
