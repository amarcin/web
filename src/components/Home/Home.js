import React from 'react';
import Footer from '../Navbar/Footer';
import Carousel from './Carousel/Carousel';
import HeroSection from './HeroSection/HeroSection'
import Loader from './Loader/Loader';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <HeroSection />
        <Carousel />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
