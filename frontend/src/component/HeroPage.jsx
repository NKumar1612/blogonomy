import { useState, useEffect, React } from 'react';

export const 
HeroPage = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <section className="relative w-screen h-screen sm:min-h-screen bg-gradient-to-r from-pale-pink to-light-lavender text-chery-red flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt="Hero Background"
          className="object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentImageIndex === 0 ? 1 : 0 }} // Set initial opacity
        />
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
      </div>
    </section>



      )
}
