'use client';

import { useState, useEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const toggleCart = () => {
    setIsCartActive(!isCartActive);
  };

  return (
    <>
      <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
        <div className="container relative flex justify-between items-center px-3 py-5 mx-auto">
          <a href="#" className="logo text-3xl font-serif font-bold text-papaya_whip tracking-wider italic">
  Vintage Shop
</a>

          <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
            <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar} data-nav-toggler>
              <CloseIcon sx={{ color: '#f5f5dc', fontSize: 24 }} />
            </button>

            <ul className="md:flex md:items-center md:gap-3 xl:gap-7">
              <li>
                <a href="#home" className="navbar-link">Home</a>
              </li>

              <li>
                <button className="navbar-link flex items-center gap-2 min-w-full" aria-label="shop" onClick={toggleDropdown} data-dropdown-toggler>
                  Shop

                  <ChevronRightIcon sx={{ fontSize: 18 }} className={`duration-200 transform ${isDropdownActive ? 'rotate-90' : ''}`} />
                </button>

                <div className={`dropdown ${isDropdownActive ? 'active' : ''}`} data-dropdown>
                  <div className="dropdown-content">
                    <a href="#" className="pt-2">All Products</a>
                    <a href="#" className="">Clothing</a>
                    <a href="#" className="">Candles</a>
                    <a href="#" className="">Accessories</a>
                    <a href="#" className="">Bags</a>
                    <a href="#" className="">Clocks</a>
                    <a href="#" className="pb-2">SALE 🏷️</a>
                  </div>
                </div>
              </li>

              <li>
                <a href="#blog" className="navbar-link">Blog</a>
              </li>

              <li>
                <a href="#latest" className="navbar-link">Latest</a>
              </li>

              <li>
                <a href="#info" className="navbar-link">Info</a>
              </li>
            </ul>
          </nav>

          <div className="rounded-md overflow-hidden flex items-center gap-3 lg:fixed lg:top-5 lg:right-5">
            <button className="cart-toggler" aria-label="cart toggler" onClick={toggleCart} data-cart-toggler>
              <ShoppingCartCheckoutIcon sx={{ color: '#f5f5dc', fontSize: 24 }} />
            </button>

            <div className="relative">
              <div className={`cart-modal ${isCartActive ? 'active' : ''}`} data-cart-modal>
                <ul>
                  <li className="flex gap-2 pr-2">
                    <figure className="img-holder w-20 h-20 rounded-md flex-shrink-0" style={{ '--width': 80, '--height': 80 } as React.CSSProperties}>
                      <img src="/images/cart-1.jpg" width="80" height="80" loading="lazy"
                        alt="Handmade painted coffee mug" className="img-cover" />
                    </figure>

                    <div>
                      <span className="text-caf_noir text-sm font-bold">Handmade painted coffee mug</span>

                      <div className="flex items-center gap-1 text-[13px]">
                        <p>1 ×</p>

                        <p>$85.00</p>
                      </div>
                    </div>

                    <button className="h-5 w-5 flex-shrink-0 mb-auto" aria-label="remove product">
                      <CloseIcon sx={{ fontSize: 18 }} />
                    </button>
                  </li>

                  <div className="h-[1px] w-full my-3 bg-butterscotch_light"></div>

                  <li className="flex gap-2 pr-2">
                    <figure className="img-holder w-20 h-20 rounded-md flex-shrink-0" style={{ '--width': 80, '--height': 80 } as React.CSSProperties}>
                      <img src="/images/cart-2.jpg" width="80" height="80" loading="lazy"
                        alt="Vintage Antique & Candle Holder" className="img-cover" />
                    </figure>

                    <div>
                      <span className="text-caf_noir text-sm font-bold">Vintage Antique & Candle Holder</span>

                      <div className="flex items-center gap-1 text-[13px]">
                        <p>1 ×</p>

                        <p>$990.00</p>
                      </div>
                    </div>

                    <button className="h-5 w-5 flex-shrink-0 mb-auto" aria-label="remove product">
                      <CloseIcon sx={{ fontSize: 18 }} />
                    </button>
                  </li>

                  <div className="h-[1px] w-full my-3 bg-butterscotch_light"></div>

                  <div className="flex justify-center items-center gap-2">
                    <a href="#" className="btn bg-butterscotch_light text-caf_noir py-3 px-4" aria-label="checkout">
                      checkout
                    </a>

                    <a href="#" className="btn btn-text py-3 px-4" aria-label="view cart">
                      view cart
                    </a>
                  </div>
                </ul>
              </div>
            </div>

            <button className="h-10 w-10 grid place-items-center md:hidden" aria-label="toggle menu" onClick={toggleNavbar} data-nav-toggler>
              <MenuIcon sx={{ color: '#f5f5dc', fontSize: 24 }} />
            </button>
          </div>

          <div className={`overlay ${isNavbarActive ? 'active' : ''}`} data-overlay data-nav-toggler onClick={toggleNavbar}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
