import React from 'react'

export const 
HeroPage = () => {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center overflow-hidden">
     
      <div className="absolute inset-0 flex animate-scroll">
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://unsplash.com/photos/a-blurry-photo-of-a-street-light-at-night-t51mvHSr3Rw')]"></div>
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://unsplash.com/photos/a-bird-sitting-on-a-branch-of-a-cherry-blossom-tree-G47Mr6j6x9w')]"></div>
        <div className="flex-shrink-0 w-full h-full bg-cover bg-[url('https://unsplash.com/photos/a-picture-of-a-woman-is-on-display-6ISxg5MviS8')]"></div>
      </div>

  
      <div className="relative z-10 flex flex-col max-w-md mx-auto py-4 sm:py-10 md:py-20 text-center bg-gradient-to-r from-pale-pink to-light-lavender bg-opacity-75 rounded-md px-4 sm:px-6 md:px-10">
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
