import React from 'react';
import Carousel from './Carousel/Carousel';
import HeroSection from './HeroSection/HeroSection'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <HeroSection />
        <Carousel />  
      </div>
    </div>
  )
}

export default Home;
