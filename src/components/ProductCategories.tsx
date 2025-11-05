'use client';

import { useState, useEffect } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProductCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      image: '/images/slide-1.jpg',
      title: 'Attire',
      price: '$25.75',
      description: 'Artisanal designs that make every day a feast'
    },
    {
      id: 2,
      image: '/images/slide-2.jpg',
      title: 'Jewellery',
      price: '$25.75',
      description: 'Casual yet sophisticated pieces for every room in the house'
    },
    {
      id: 3,
      image: '/images/slide-3.jpg',
      title: 'Decor',
      price: '$25.75',
      description: 'Tasteful elements to mix and match for an elevated look'
    },
    {
      id: 4,
      image: '/images/slide-4.jpg',
      title: 'Bag',
      price: '$25.75',
      description: 'Artisanal designs that make every day a feast'
    },
    {
      id: 5,
      image: '/images/slide-5.jpg',
      title: 'Wool Panda Bag',
      price: '$25.75',
      description: 'Casual yet sophisticated pieces for every room in the house'
    },
    {
      id: 6,
      image: '/images/slide-6.jpg',
      title: 'Decor',
      price: '$25.75',
      description: 'Tasteful elements to mix and match for an elevated look'
    },
    {
      id: 7,
      image: '/images/slide-7.jpg',
      title: 'Autumn aesthetic candles',
      price: '$25.75',
      description: 'Tasteful elements to mix and match for an elevated look'
    },
    {
      id: 8,
      image: '/images/slide-8.jpg',
      title: 'Candle',
      price: '$25.75',
      description: 'Tasteful elements to mix and match for an elevated look'
    },
    {
      id: 9,
      image: '/images/slide-9.jpg',
      title: 'Art Wall Frame',
      price: '$25.75',
      description: 'Tasteful elements to mix and match for an elevated look'
    },
    {
      id: 10,
      image: '/images/slide-10.jpg',
      title: 'Autumn leaf',
      price: '$25.75',
      description: 'Tasteful elements to mix and match for an elevated look'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    setAutoSlideInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const stopAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    }
  };

  const startAutoSlide = () => {
    if (!autoSlideInterval) {
      const interval = setInterval(nextSlide, 2000);
      setAutoSlideInterval(interval);
    }
  };

  return (
    <section>
      <div className="container mx-auto px-3 py-10 md:py-16 grid gap-6 sm:px-7 md:grid-cols-[0.8fr_1fr] md:items-center md:gap-0 lg:py-24 lg:grid-cols-[0.8fr_1fr] xl:grid-cols-[0.5fr_1fr] xl:py-20 xl:px-10">
        <div className="md:mb-16">
          <h1 className="text-caf_noir font-primary font-bold text-6xl text-center my-3 md:text-start lg:text-7xl">
            Our Product Categories
          </h1>

          <p className="text-jet text-center text-lg md:hidden">
            Explore our curated popular collection product categories featuring high-quality.
          </p>

          <button className="btn bg-butterscotch_light py-3 px-10 mt-5 mx-auto hidden md:block md:mx-0 md:mt-10 lg:py-4 lg:mx-0" aria-label="shop">
            view products
          </button>
        </div>

        <div className="grid gap-3 md:gap-5 lg:gap-10" data-slider-container>
          <div className="slider h-[450px] sm:max-w-[540px] sm:ms-5 md:max-w-full md:ms-0 overflow-hidden relative" data-slider
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}>
              {slides.map((slide, index) => (
                <div key={slide.id} className="flex-shrink-0 w-64 mr-5 group pb-6 space-y-5 rounded-lg">
                  <div className="relative overflow-hidden">
                    <figure className="img-holder rounded-lg h-80" style={{ '--width': 265, '--height': 320 } as React.CSSProperties}>
                      <img src={slide.image} width="265" height="320" loading="lazy" alt={slide.title} className="img-cover duration-[0.5s] ease-linear group-hover:scale-105" />
                    </figure>

                    <div className="bg-[#d89245c7] text-white px-3 py-1 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center gap-2 opacity-0 duration-75 ease-linear group-hover:opacity-100">
                    <button className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                      <ShoppingBagIcon sx={{ fontSize: 22 }} />
                    </button>

                    <button className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                      <FavoriteIcon sx={{ fontSize: 22 }} />
                    </button>

                    <button className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                      <VisibilityIcon sx={{ fontSize: 22 }} />
                    </button>
                    </div>
                  </div>

                  <div className="card-content space-y-2">
                    <div className="flex justify-between items-start">
                      <p className="text-lg text-jet font-bold">{slide.title}</p>

                      <span className="bg-butterscotch px-2 py-1 text-sm text-papaya_whip font-bold">{slide.price}</span>
                    </div>

                    <p className="product-detail">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mx-auto md:-order-1 md:mx-0 md:ms-auto"
               onMouseEnter={stopAutoSlide}
               onMouseLeave={startAutoSlide}>
            <button className="h-12 w-12 grid place-items-center bg-butterscotch text-white rounded-full shadow-lg transition-all duration-200 hover:bg-butterscotch_light hover:scale-110" aria-label="slide prev" onClick={prevSlide}>
              <span className="text-caf_noir font-bold text-xl">{'<'}</span>
            </button>

            <button className="h-12 w-12 grid place-items-center bg-butterscotch text-white rounded-full shadow-lg transition-all duration-200 hover:bg-butterscotch_light hover:scale-110" aria-label="slide next" onClick={nextSlide}>
              <span className="text-caf_noir font-bold text-xl">{'>'}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
