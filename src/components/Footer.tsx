import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer id="info" className="bg-papaya_whip">
      <div className="container mx-auto">
        <div className="relative px-3 py-12 space-y-6 md:space-y-24 lg:pb-24">
          <a href="#" className="logo text-3xl font-serif font-bold text-caf_noir tracking-wider italic">
  Vintage Shop
</a>

          <div className="flex flex-wrap gap-y-6 gap-x-20 sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-x-10">
            <h3 className="text-caf_noir font-primary font-bold text-4xl md:mt-4">Get in Touch</h3>

            <div>
              <span className="text-caf_noir font-bold">Mailing Address</span>

              <p>
                123 Anywhere St., Any City, <br /> State, Country 12345
              </p>
            </div>

            <div className="mt-auto md:mt-0">
              <span className="text-caf_noir font-bold">Email Address</span>

              <a href="mailto:hello@reallygreatsite.com">
                hello@reallygreatsite.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 md:-mt-10">
                <a href="#" className="bg-caf_noir h-7 w-7 grid place-items-center rounded-full group hover:bg-butterscotch transition-colors">
                  <TwitterIcon sx={{ color: '#f5f5dc', fontSize: 16 }} className="duration-150 group-hover:scale-125" />
                </a>

                <a href="#" className="bg-caf_noir h-7 w-7 grid place-items-center rounded-full group hover:bg-butterscotch transition-colors">
                  <FacebookIcon sx={{ color: '#f5f5dc', fontSize: 16 }} className="duration-150 group-hover:scale-125" />
                </a>

                <a href="#" className="bg-caf_noir h-7 w-7 grid place-items-center rounded-full group hover:bg-butterscotch transition-colors">
                  <GitHubIcon sx={{ color: '#f5f5dc', fontSize: 16 }} className="duration-150 group-hover:scale-125" />
                </a>

                <a href="#" className="bg-caf_noir h-7 w-7 grid place-items-center rounded-full group hover:bg-butterscotch transition-colors">
                  <InstagramIcon sx={{ color: '#f5f5dc', fontSize: 16 }} className="duration-150 group-hover:scale-125" />
                </a>
              </div>

              <span className="text-caf_noir font-bold md:mt-3">Phone Number</span>

              <a href="tel:(123) 456 7890">
                (123) 456 7890
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom px-3 py-4 space-y-6">
          <p>
            Copyright
            <a href="https://www.instagram.com/alizay_ayesha/" target="_blank" rel="noopener noreferrer" className="text-caf_noir font-bold underline inline">Alizay Ayesha</a>
            2025 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
