import React from 'react';
import Footer from '../Navbar/Footer';
import Carousel from './Carousel/Carousel';
import HeroSection from './HeroSection/HeroSection'
import Loader from './Loader/Loader';
import Projects from '../Projects'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <HeroSection />
        {/* <Carousel /> */}
      </div>
      <div className='projCont'>
        <Projects />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
