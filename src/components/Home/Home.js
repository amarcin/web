import React from 'react';
import Footer from '../Navbar/Footer';
import Carousel from './Carousel/Carousel';
import HeroSection from './HeroSection/HeroSection'
import Loader from './Loader/Loader';

function Home() {
  return (
    <div className="home">
      {/* <video className='appBg' src={'https://amplify-web-staging-11952-deployment.s3.us-west-1.amazonaws.com/VideoBgTrimH264.mp4'} autoPlay loop muted /> */}
      <div className="home-container">
        <HeroSection />
        <Carousel />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
