'use client';

import { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      image: 'https://cozynest.codewithsadee.com/assets/images/purchased-items-1.jpg',
      title: 'Love It!',
      review: '"This scarf instantly became my go-to for chilly mornings. The red tartan is so rich and classic — it feels like something you\'d borrow from your grandma\'s closet and never give back. Soft, warm, and full of quiet charm."',
      customer: 'Emily T.',
      item: 'Red Tartan Cashmere Scarf',
      avatar: 'https://cozynest.codewithsadee.com/assets/images/avatar-1.png',
      imageWidth: 250,
      imageHeight: 210
    },
    {
      id: 2,
      image: 'https://cozynest.codewithsadee.com/assets/images/purchased-items-2.png',
      title: 'Love It!',
      review: '"I wasn\'t expecting to love a scarf this much, but wow. The black tartan has that perfect balance of minimal and vintage. It feels luxurious without trying too hard — and it\'s unbelievably soft against the skin."',
      customer: 'Hannah K.',
      item: 'Black Tartan Cashmere Scarf',
      avatar: 'https://cozynest.codewithsadee.com/assets/images/avatar-2.png',
      imageWidth: 251,
      imageHeight: 210
    },
    {
      id: 3,
      image: 'https://cozynest.codewithsadee.com/assets/images/purchased-items-3.png',
      title: 'Love It!',
      review: '"I didn\'t expect much, but this candle surprised me. The frosted glass looks great on my shelf, and the soft glow is perfect for relaxing. The scent is subtle and calming — just right for my space."',
      customer: 'Ethan V.',
      item: 'Frosted Glass Scented Candles',
      avatar: 'https://cozynest.codewithsadee.com/assets/images/avatar-3.png',
      imageWidth: 250,
      imageHeight: 210
    },
    {
      id: 4,
      image: 'https://cozynest.codewithsadee.com/assets/images/purchased-items-4.png',
      title: 'Love It!',
      review: '"This tote is everything I didn\'t know I needed. The little embroidered bicycle and fall leaves? Adorable. It feels like something you\'d find in a storybook — practical, but with a bit of poetry. I use it almost every day."',
      customer: 'Sofia R.',
      item: 'Fall Leaves Bicycle Handcrafted Tote Bag',
      avatar: 'https://cozynest.codewithsadee.com/assets/images/avatar-4.jpeg',
      imageWidth: 562,
      imageHeight: 678
    },

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
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
      const interval = setInterval(nextSlide, 5000);
      setAutoSlideInterval(interval);
    }
  };

  return (
    <section className="bg-caf_noir text-white">
      <div className="container mx-auto px-3 py-10 sm:px-7 md:py-16 lg:py-24">
        <h2 className="text-5xl font-primary mb-6 flex items-center gap-2 lg:text-6xl">
          Customer
          <span className="italic">Reviews</span>
        </h2>

        <div data-slider-container className="relative">
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <ul
              className="slider flex transition-transform duration-500 ease-in-out"
              data-slider
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              {testimonials.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className="slider-item flex-shrink-0 w-full"
                >
                  <div className="testimonial-card bg-papaya_whip group rounded-md overflow-hidden min-w-[450px] sm:min-w-[580px] sm:max-w-[580px] sm:grid sm:grid-cols-[0.4fr_1fr] md:min-w-[756px] mx-auto">
                    <figure
                      className="img-holder h-64 sm:h-full"
                      style={{
                        '--width': `${testimonial.imageWidth}px`,
                        '--height': `${testimonial.imageHeight}px`
                      } as React.CSSProperties}
                    >
                      <img
                        src={testimonial.image}
                        width={testimonial.imageWidth}
                        height={testimonial.imageHeight}
                        loading="lazy"
                        alt=""
                        className="img-cover duration-[0.5s] ease-linear group-hover:scale-105"
                      />
                    </figure>

                    <div className="card-content px-4 py-5 md:px-5 md:py-8">
                      <div className="rating flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} sx={{ color: '#d89245', fontSize: 20 }} />
                        ))}
                      </div>

                      <h3 className="text-caf_noir text-lg uppercase font-semibold my-5">
                        {testimonial.title}
                      </h3>

                      <p className="text-jet text-sm mb-5 max-h-[80px] overflow-y-auto">
                        {testimonial.review}
                      </p>

                      <div className="pt-5 flex items-center gap-4 border-t border-solid border-[#1111111a]">
                        <figure
                          className="img-holder avatar"
                          style={{
                            '--width': '60px',
                            '--height': '60px'
                          } as React.CSSProperties}
                        >
                          <img
                            src={testimonial.avatar}
                            width="60"
                            height="60"
                            alt=""
                            className="img-cover rounded-full"
                          />
                        </figure>

                        <div>
                          <p className="text-caf_noir text-sm font-semibold mb-1">
                            {testimonial.customer}
                          </p>

                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <p className="text-jet text-xs font-semibold">Item purchased:</p>

                            <a
                              href="#"
                              className="text-butterscotch text-xs font-semibold underline flex items-center gap-1"
                            >
                              {testimonial.item}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div
            className="flex items-center justify-center gap-3 border-t border-t-caf_noir mx-auto md:-order-1 md:mx-0 md:ms-auto mt-6 pt-6"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <button
              className="arrow-button hover:bg-butterscotch hover:bg-opacity-20 transition-colors p-2 rounded-full"
              aria-label="slide prev"
              onClick={prevSlide}
              data-prev-btn
            >
              <ChevronLeftIcon sx={{ color: '#f5f5dc', fontSize: 28 }} />
            </button>

            <button
              className="arrow-button hover:bg-butterscotch hover:bg-opacity-20 transition-colors p-2 rounded-full"
              aria-label="slide next"
              onClick={nextSlide}
              data-next-btn
            >
              <ChevronRightIcon sx={{ color: '#f5f5dc', fontSize: 28 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
