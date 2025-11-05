import Head from 'next/head';
import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ProductCategories from '@/components/ProductCategories';
import Blog from '@/components/Blog';
import NewArrival from '@/components/NewArrival';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>CozyNest - Handcrafted Fashion & Vintage Decor</title>
        <meta name="title" content="CozyNest - Handcrafted Fashion & Vintage Decor" />
  <meta name="description" content="This is CozyNest - Handcrafted Fashion & Vintage Decor E-commerce Website made by Alizay Ayesha" />

        <link rel="shortcut icon" href="/images/favicon-light.svg" type="image/svg+xml" />
      </Head>

      <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
        noModule
      />

      <main>
        <Header />
        <Hero />
        <ProductShowcase />
        <ProductCategories />
        <Blog />
        <NewArrival />
        <Testimonials />

        <div className="parallax" style={{ backgroundImage: 'url(/images/cta-bg.png)' }}></div>
      </main>

      <Footer />
    </>
  );
}
