const ProductShowcase = () => {
  return (
    <div className="bg-papaya_whip relative sm:before:absolute sm:before:bottom-0 sm:before:left-2/4 sm:before:-translate-x-2/4 sm:before:rounded-full sm:before:w-[92%] sm:before:h-[100%] sm:before:-z-10 sm:before:shadow-[0_0_50px_25px_#00000038]">
      <div className="container mx-auto px-3 py-10 sm:px-7 md:px-10 xl:px-14 xxl:px-20">
        <div className="mx-auto grid gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:gap-5">

          <div className="card sm:row-span-2 md:min-h-[712px] lg:min-h-[600px] xxl:min-h-[600px]" style={{ backgroundImage: 'url(/images/product-showcase-1.jpg)' }}>
            <p className="text-licorice text-2xl font-bold">Clothings</p>
            <p className="text-caf_noir text-lg">954 Products</p>
          </div>

          <div className="card" style={{ backgroundImage: 'url(/images/product-showcase-2.jpg)' }}>
            <p className="text-licorice text-2xl font-bold">Candles</p>
            <p className="text-caf_noir text-lg">184 Products</p>
          </div>

          <div className="card" style={{ backgroundImage: 'url(/images/product-showcase-3.jpg)' }}>
            <p className="text-licorice text-2xl font-bold">Accessories</p>
            <p className="text-caf_noir text-lg">956 Products</p>
          </div>

          <div className="card" style={{ backgroundImage: 'url(/images/product-showcase-4.jpg)' }}>
            <p className="text-licorice text-2xl font-bold">Clocks</p>
            <p className="text-caf_noir text-lg">710 Products</p>
          </div>

          <div className="card" style={{ backgroundImage: 'url(/images/product-showcase-5.jpg)' }}>
            <p className="text-licorice text-2xl font-bold">Bags</p>
            <p className="text-caf_noir text-lg">710 Products</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
