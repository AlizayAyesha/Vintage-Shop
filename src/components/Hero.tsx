const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container mx-auto px-3 pb-10 sm:px-7 md:py-16">
        <div className="hero-content relative z-10 mt-52">
          <p className="text-white uppercase font-bold text-center md:text-lg lg:text-start">
            Welcome to vintage shop
          </p>

          <h1 className="text-white font-primary font-bold text-6xl text-center mt-3 sm:text-7xl md:text-8xl lg:text-start lg:text-[85px] xxl:text-8xl">
            Handmade Fashion & Vintage Pieces
          </h1>

          <a href="#" className="btn bg-papaya_whip py-3 px-10 mt-5 mx-auto md:mt-10 lg:mx-0 xxl:text-xl" aria-label="shop">
            Shop this shop
          </a>

          <div className="mt-52">
            <p className="text-white font-bold">Trusted by :</p>

            <ul className="brand-list flex items-center gap-5 overflow-x-auto snap-x snap-mandatory py-5 lg:mr-10 lg:px-3 lg:-ms-3">
              <li className="brand-list-item">
                <img src="/images/brand-1.svg" alt="" className="w-32" />
              </li>
              <li className="brand-list-item">
                <img src="/images/brand-2.svg" alt="" className="w-32" />
              </li>
              <li className="brand-list-item">
                <img src="/images/brand-3.svg" alt="" className="w-[155px]" />
              </li>
              <li className="brand-list-item">
                <img src="/images/brand-4.svg" alt="" className="w-[155px]" />
              </li>
            </ul>
          </div>
        </div>

        <figure className="img-holder hero-banner" style={{ '--width': 468, '--height': 702 } as React.CSSProperties}>
          <img src="/images/hero-banner.jpg" width="468" height="702" alt="hero image" className="img-cover blur-lg brightness-[0.3] lg:block lg:blur-none lg:brightness-100" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
