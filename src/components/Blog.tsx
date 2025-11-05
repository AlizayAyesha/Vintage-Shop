import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blog = () => {
  return (
    <section className="bg-caf_noir text-white relative overflow-hidden" id="blog">
      <div className="container mx-auto px-3 py-10 grid gap-10 relative z-[1] sm:gap-5 sm:grid-cols-2 sm:items-center sm:px-7 md:py-16 md:items-stretch lg:py-24 xl:py-20 xl:px-10">

        <div className="md:grid md:content-between">
          <div>
            <h1 className="font-primary font-bold text-5xl mb-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Handmade Decor: <br /> The Power of Selling Online
            </h1>

            <p className="text-lg italic mb-10 lg:max-w-md xl:text-2xl xl:max-w-lg">
              Discover how selling online can grow your handmade decor business.
            </p>
          </div>

          <div>
            <p className="font-bold sm:text-sm md:text-base">
              September 16-18, 2025 <br />
              Paragon One Plaza and Sky Garden
            </p>

            <a href="#" className="btn bg-butterscotch_light text-caf_noir py-3 px-10 mt-5 cursor-pointer lg:mx-0 lg:py-4" aria-label="read more">
              Read more

              <ArrowForwardIcon sx={{ fontSize: 20, marginLeft: 1 }} />
            </a>
          </div>
        </div>

        <div className="grid gap-3 max-w-md ms-auto lg:grid-cols-3 lg:max-w-full">
          <div className="grid grid-cols-3 gap-3 lg:col-span-2">
            <figure className="img-holder group col-span-3" style={{ '--width': 474, '--height': 474 } as React.CSSProperties}>
              <img src="/images/grid-1.jpg" width="474" height="474" loading="lazy" alt="" className="img-cover duration-200 ease-linear group-hover:scale-[1.01]" />
            </figure>

            <figure className="img-holder group" style={{ '--width': 160, '--height': 160 } as React.CSSProperties}>
              <img src="/images/grid-2.jpg" width="160" height="160" loading="lazy" alt="" className="img-cover duration-200 ease-linear group-hover:scale-105" />
            </figure>

            <figure className="img-holder group" style={{ '--width': 160, '--height': 160 } as React.CSSProperties}>
              <img src="/images/grid-3.jpg" width="160" height="160" loading="lazy" alt="" className="img-cover duration-200 ease-linear group-hover:scale-105" />
            </figure>

            <figure className="img-holder group" style={{ '--width': 160, '--height': 160 } as React.CSSProperties}>
              <img src="/images/grid-4.jpg" width="160" height="160" loading="lazy" alt="" className="img-cover duration-200 ease-linear group-hover:scale-105" />
            </figure>
          </div>

          <figure className="img-holder group hidden lg:block" style={{ '--width': 250, '--height': 500 } as React.CSSProperties}>
            <img src="/images/grid-5.jpg" width="250" height="500" loading="lazy" alt="" className="img-cover duration-200 ease-linear group-hover:scale-[1.01]" />
          </figure>
        </div>

      </div>

      <img src="/images/autumn-leaf.svg" loading="lazy" alt="" className="absolute top-96 -left-2 opacity-5 max-w-56 animate-bouncing sm:-left-16" />
    </section>
  );
};

export default Blog;
