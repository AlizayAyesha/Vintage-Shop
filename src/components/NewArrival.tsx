import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

const NewArrival = () => {
  const products = [
    {
      id: 1,
      image: '/images/new-product-1.jpg',
      title: 'Cable Roll Neck Sweater',
      price: '$25.75'
    },
    {
      id: 2,
      image: '/images/new-product-2.jpg',
      title: 'CableKnit Sweater',
      price: '$25.75'
    },
    {
      id: 3,
      image: '/images/new-product-3.png',
      title: 'Wool Panda Diary Cover',
      price: '$25.75'
    },
    {
      id: 4,
      image: '/images/new-product-4.jpg',
      title: 'Vintage Lace Hand Watch',
      price: '$25.75'
    },
    {
      id: 5,
      image: '/images/new-product-5.jpg',
      title: 'Boho crochet Earrings',
      price: '$25.75'
    },
    {
      id: 6,
      image: '/images/new-product-6.jpg',
      title: 'White Wool Panda Bag',
      price: '$25.75'
    }
  ];

  return (
    <section id="latest">
      <div className="container max-w-[550px] mx-auto px-3 py-10 md:py-16 md:max-w-[1000px] lg:py-24 lg:max-w-[1200px] xl:max-w-[1400px] xxl:max-w-[1600px]">

        <h1 className="text-caf_noir font-primary font-bold text-6xl text-center my-3">
          New Arrival
        </h1>

        <p className="text-jet text-center text-lg max-w-xl mx-auto md:text-lg">
          Discover the latest must-have arrivals! Elevate your style with our newest collection of trendsetting items.
        </p>

        <ul className="grid-list grid gap-3 mt-6 xs:grid-cols-2 md:grid-cols-3 md:max-w-[800px] md:mx-auto lg:grid-cols-5 lg:gap-4 lg:max-w-[1370px] xl:gap-5">
          {products.slice(0, 3).map((product) => (
            <li key={product.id} className="group pb-6 space-y-5 max-w-64 rounded-lg duration-75 ease-linear">
              <div className="img-box relative overflow-hidden">
                <figure className="img-holder rounded-lg h-80" style={{ '--width': 256, '--height': 320 } as React.CSSProperties}>
                  <img src={product.image} width="256" height="320" loading="lazy" alt="" className="img-cover duration-[0.5s] ease-linear group-hover:scale-105" />
                </figure>

                <div className="bg-[#d89245c7] text-white px-3 py-1 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center gap-2 opacity-0 duration-75 ease-linear group-hover:opacity-100">
                  <a href="#" className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                    <ShoppingBagIcon sx={{ fontSize: 22 }} />
                  </a>

                  <a href="#" className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                    <FavoriteIcon sx={{ fontSize: 22 }} />
                  </a>

                  <a href="#" className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                    <VisibilityIcon sx={{ fontSize: 22 }} />
                  </a>
                </div>
              </div>

              <div className="card-content space-y-2">
                <div className="flex justify-between items-start">
                  <p className="text-lg text-jet font-bold">
                    {product.title}
                  </p>

                  <span className="bg-butterscotch px-2 py-1 text-sm text-papaya_whip font-bold">{product.price}</span>
                </div>
              </div>
            </li>
          ))}

          <li className="off-card relative bg-no-repeat rounded-md bg-center bg-cover overflow-hidden p-3 xs:col-span-2 xs:mb-6 md:mb-0 md:p-5 md:order-1 lg:order-none" style={{ backgroundImage: 'url(/images/off-2.jpg)' }}>
            <div className="bg-[#4f3120db] text-white max-w-max ms-auto px-4 py-5 rounded-md relative z-10 md:px-5 md:py-6">
              <div className="flex justify-center items-center gap-3 mb-5 md:mb-9">
                <span className="font-primary font-bold text-5xl leading-[0] mb-2 md:text-[64px]">30%</span>

                <span className="italic">Off</span>
              </div>

              <p className="text-center mb-1">All new Arrival watch</p>

              <a href="#" className="font-primary font-semibold tracking-widest px-4 py-3 text-center border border-solid border-butterscotch">
                See all products
              </a>
            </div>
          </li>

          <li className="off-card relative bg-no-repeat rounded-md bg-center bg-cover overflow-hidden p-3 xs:col-span-2 xs:mb-6 md:mb-0 md:p-5 md:order-1 lg:order-none" style={{ backgroundImage: 'url(/images/off-1.jpg)' }}>
            <div className="bg-[#4f3120db] text-white max-w-max ms-auto px-4 py-5 rounded-md relative z-10 md:px-5 md:py-6">
              <div className="flex justify-center items-center gap-3 mb-5 md:mb-9">
                <span className="font-primary font-bold text-5xl leading-[0] mb-2 md:text-[64px]">45%</span>

                <span className="italic">Off</span>
              </div>

              <p className="text-center mb-1">All new Flower Vase</p>

              <a href="#" className="font-primary font-semibold tracking-widest px-4 py-3 text-center border border-solid border-butterscotch">
                See all products
              </a>
            </div>
          </li>

          {products.slice(3).map((product) => (
            <li key={product.id} className="group pb-6 space-y-5 max-w-64 rounded-lg duration-75 ease-linear">
              <div className="img-box relative overflow-hidden">
                <figure className="img-holder rounded-lg h-80" style={{ '--width': 256, '--height': 320 } as React.CSSProperties}>
                  <img src={product.image} width="256" height="320" loading="lazy" alt="" className="img-cover duration-[0.5s] ease-linear group-hover:scale-105" />
                </figure>

                <div className="bg-[#d89245c7] text-white px-3 py-1 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center gap-2 opacity-0 duration-75 ease-linear group-hover:opacity-100">
                  <a href="#" className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                    <ShoppingBagIcon sx={{ fontSize: 22 }} />
                  </a>

                  <a href="#" className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                    <FavoriteIcon sx={{ fontSize: 22 }} />
                  </a>

                  <a href="#" className="h-9 w-9 grid place-items-center hover:bg-white hover:bg-opacity-20 rounded transition-colors">
                    <VisibilityIcon sx={{ fontSize: 22 }} />
                  </a>
                </div>
              </div>

              <div className="card-content space-y-2">
                <div className="flex justify-between items-start">
                  <p className="text-lg text-jet font-bold">
                    {product.title}
                  </p>

                  <span className="bg-butterscotch px-2 py-1 text-sm text-papaya_whip font-bold">{product.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default NewArrival;
