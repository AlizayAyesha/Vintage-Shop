'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [brandsPerSlide, setBrandsPerSlide] = useState(1);

  const brands = [
    { id: 1, image: '/images/brand-1.svg', alt: 'Brand 1' },
    { id: 2, image: '/images/brand-2.svg', alt: 'Brand 2' },
    { id: 3, image: '/images/brand-3.svg', alt: 'Brand 3' },
    { id: 4, image: '/images/brand-4.svg', alt: 'Brand 4' },
  ];

  const totalSlides = Math.ceil(brands.length / brandsPerSlide);

  useEffect(() => {
    const updateBrandsPerSlide = () => {
      setBrandsPerSlide(window.innerWidth < 640 ? 2 : 1);
    };

    updateBrandsPerSlide();
    window.addEventListener('resize', updateBrandsPerSlide);

    return () => window.removeEventListener('resize', updateBrandsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2500);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="hero" id="home">
      {/* ✅ Mobile Fullscreen Hero */}
      <div className="relative block sm:hidden h-[90vh] w-full overflow-hidden">
        <img
          src="/images/hero-banner.jpg"
          alt="hero mobile"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />

        {/* Text Overlay on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="text-white uppercase font-bold text-lg">
            Welcome to vintage shop
          </p>

          <h1 className="text-white font-primary font-bold text-4xl mt-3 leading-tight">
            Handmade Fashion & <br /> Vintage Pieces
          </h1>

          <a
            href="#"
            className="btn bg-papaya_whip text-caf_noir py-3 px-10 mt-6 font-semibold rounded-md"
            aria-label="shop"
          >
            Shop this
          </a>

          {/* Mobile Carousel - Multiple brands */}
          <div className="absolute bottom-8 left-0 right-0 px-5">
            <p className="text-white font-bold mb-3 text-center">Trusted by :</p>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex-shrink-0 w-full">
                    <div className="flex justify-around items-center">
                      {brands
                        .slice(slideIndex * brandsPerSlide, (slideIndex + 1) * brandsPerSlide)
                        .map((brand) => (
                          <img
                            key={brand.id}
                            src={brand.image}
                            alt={brand.alt}
                            className="h-8 object-contain grayscale brightness-0 invert"
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-3 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-butterscotch' : 'bg-white bg-opacity-50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Desktop + Tablet Layout */}
      <div className="hidden sm:block relative min-h-screen">
        <div className="container mx-auto px-3 sm:px-7 md:py-16 relative z-10">
          <div className="hero-content mt-32 md:mt-52">
            <p className="text-white uppercase font-bold text-center md:text-lg lg:text-start">
              Welcome to vintage shop
            </p>

            <h1 className="text-white font-primary font-bold text-4xl md:text-6xl text-center mt-3 lg:text-start lg:text-[85px] xxl:text-8xl leading-tight">
              Handmade Fashion & Vintage Pieces
            </h1>

            <a
              href="#"
              className="btn bg-papaya_whip text-caf_noir py-3 px-10 mt-5 mx-auto md:mt-10 lg:mx-0 xxl:text-xl hover:bg-butterscotch hover:text-white transition-colors"
              aria-label="shop"
            >
              Shop this
            </a>

            {/* Desktop Carousel */}
            <div className="mt-20 md:mt-52">
              <p className="text-white font-bold mb-4">Trusted by :</p>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="flex-shrink-0 w-full">
                      <div className="flex justify-center items-center space-x-8 md:space-x-12">
                        {brands
                          .slice(slideIndex * brandsPerSlide, (slideIndex + 1) * brandsPerSlide)
                          .map((brand) => (
                            <img
                              key={brand.id}
                              src={brand.image}
                              alt={brand.alt}
                              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            />
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-butterscotch' : 'bg-white bg-opacity-50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Background image for desktop */}
          <figure
            className="img-holder hero-banner absolute top-0 right-0 w-full h-full -z-10"
            style={{ '--width': 468, '--height': 702 } as React.CSSProperties}
          >
            <img
              src="/images/hero-banner.jpg"
              width="468"
              height="702"
              alt="hero image"
              className="img-cover blur-lg brightness-[0.3] lg:blur-none lg:brightness-100"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
